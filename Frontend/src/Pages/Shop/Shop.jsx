import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import './Shop.css';
import {
  Sidebar,
  ProductCard,
  useWishlist,
  useCart,
  useSearchBar,
  Pagination,
} from '../../index.js';
import { useProductAvailable } from '../../Context/product-context';
import axios from 'axios';

import { ShopCard } from '../../Components/Card/ShopCard';
import { BusinessBooks } from '../../Components/BusinessBooks/BusinessBooks';
import { NonFictionBooks } from '../../Components/NonFictionBooks/NonFictionBooks';
import Loader from '../../Components/Loader/Loader';

function Shop(props) {
  let {
    productsAvailableList,
    dispatchSortedProductsList,
    productFilterOptions,
  } = useProductAvailable();

  const { dispatchUserWishlist } = useWishlist();
  const { dispatchUserCart } = useCart();
  const { pathname } = useLocation();
  const { searchBarTerm } = useSearchBar();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, currentPage]);

  useEffect(() => {
    document.title = 'BookHub | Shop';
    if (
      JSON.stringify(productsAvailableList) === JSON.stringify([]) &&
      JSON.stringify(productFilterOptions) ===
        JSON.stringify({
          includeOutOfStock: true,
          onlyFastDeliveryProducts: false,
          minPrice: 0,
          maxPrice: 1200,
          fiction: true,
          thriller: true,
          tech: true,
          philosophy: true,
          romance: true,
          manga: true,
          minRating: 1,
        })
    ) {
      //Refresh happened - Filters are default yet productsAvailableList is empty
      //Redo api call to get data
      setLoading(true);
      try {
        (async () => {
          const productsAvailableData = await axios.get(
            'http://localhost:5000/api/product',
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log('++++++++++++++++++++++++++++++++++++++');
          console.log(productsAvailableData.data.product);
          console.log('++++++++++++++++++++++++++++++++++++++');

          dispatchSortedProductsList({
            type: 'ADD_ITEMS_TO_PRODUCTS_AVAILABLE_LIST',
            payload: [...productsAvailableData.data.product],
          });
          setLoading(false);
        })();
      } catch (error) {
        console.log('Error : ', error);
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem('token');
      } else {
        try {
          (async function getUpdatedWishlistAndCart() {
            let updatedUserInfo = await axios.get(
              'http://localhost:5000/api/user/getUser',
              {
                headers: {
                  headers: { Authorization: `Bearer ${token}` },
                },
              }
            );

            if (updatedUserInfo.data.status === 'ok') {
              dispatchUserWishlist({
                type: 'UPDATE_USER_WISHLIST',
                payload: updatedUserInfo.data.user.wishlist,
              });
              dispatchUserCart({
                type: 'UPDATE_USER_CART',
                payload: updatedUserInfo.data.user.cart,
              });
            }
          })();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }, []);

  let searchedProducts = productsAvailableList.filter((productdetails) => {
    return (
      productdetails.title
        .toLowerCase()
        .includes(searchBarTerm.toLowerCase()) ||
      productdetails.author.toLowerCase().includes(searchBarTerm.toLowerCase())
    );
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  let currentSearchedProducts = searchedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  let currentProductsAvailableList = productsAvailableList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) return <Loader />;

  return (
    <div>
      <h1 className="homepage-headings">Shop</h1>
      <h2 className="homepage-headings">Business Genre Books</h2>
      <BusinessBooks />

      <h2 className="homepage-headings">Non-Fiction Genre Books</h2>
      <NonFictionBooks />
      <div className="products-container">
        <h2>
          {/* Showing{' '}
          {searchBarTerm === ''
            ? productsAvailableList.length
            : searchedProducts.length}{' '} */}
          Books Based on your interests
        </h2>
        <div className="products-card-grid">
          {productsAvailableList &&
            (searchBarTerm === ''
              ? currentProductsAvailableList.map((productdetails) => (
                  <ShopCard
                    key={productdetails._id}
                    productdetails={productdetails}
                  />
                ))
              : currentSearchedProducts.map((productdetails) => (
                  <ShopCard
                    key={productdetails._id}
                    productdetails={productdetails}
                  />
                )))}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={
            searchBarTerm === ''
              ? productsAvailableList.length
              : searchedProducts.length
          }
          paginate={setCurrentPage}
        />
      </div>
    </div>
  );
}

export { Shop };
