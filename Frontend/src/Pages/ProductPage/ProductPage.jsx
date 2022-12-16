import React, { useEffect } from "react";
import "./ProductPage.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useToast, useWishlist, useCart } from "../../index";
import Lottie from "react-lottie";
import LoadingLottie from "../../Assets/Lottie/loading-0.json";

import { RecommendBooks } from "../../Components/RecommendBooks/RecommendBooks";

function ProductPage() {
  const navigate = useNavigate();

  const { dispatchUserWishlist } = useWishlist();
  const { dispatchUserCart } = useCart();
  const { showToast } = useToast();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [productDetails, setProductDetails] = React.useState({});

  const token = localStorage.getItem("token");
  const outOfStock = false;
  let userData = JSON.parse(localStorage.getItem("user")) || {};
  const [purchased, setPurchased] = React.useState(false);

  const getUserData = async () => {
    await axios
      .get("http://localhost:5000/api/user", {
        headers: { Authorization: `Bearer ` + token },
      })
      .then((res) => {
        console.log(res.data);
        userData = res.data.user;
        console.log({ userData });
        localStorage.setItem("user", JSON.stringify(userData));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    try {
      console.log(
        "UE PURCHASED - ",
        userData.purchases.includes(productDetails.bookId)
      );
      setLoading(true);
      document.title = "BookHub | Product Page";
      (async function getDetails() {
        console.log({ id });
        console.log({ token });
        await axios
          .get(`http://localhost:5000/api/product/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            console.log(res.data.product);
            setProductDetails(res.data.product);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })();
      console.log(productDetails);
      setPurchased(userData.purchases.includes(productDetails.bookId));
    } catch (error) {
      console.log(error);
    }
  }, [purchased]);

  async function addItemToWishlist() {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwt_decode(token);

      if (!user) {
        localStorage.removeItem("token");
        showToast("warning", "", "Kindly Login");
        navigate("/login");
      } else {
        let wishlistProducts =
          JSON.parse(localStorage.getItem("wishlistProducts")) || [];
        showToast("success", "", "Item successfully added to wishlist");
        console.log(wishlistProducts);
        wishlistProducts.push(productDetails);

        localStorage.setItem(
          "wishlistProducts",
          JSON.stringify(wishlistProducts)
        );
        // let wishlistUpdateResponse = await axios.patch(
        //   'http://localhost:5000/api/wishlist',
        //   {
        //     productdetails,
        //   },
        //   {
        //     headers: {
        //       'x-access-token': localStorage.getItem('token'),
        //     },
        //   }
        // );

        // if (wishlistUpdateResponse.data.status === 'ok') {
        //   dispatchUserWishlist({
        //     type: 'UPDATE_USER_WISHLIST',
        //     payload: wishlistUpdateResponse.data.user.wishlist,
        //   });
        //   showToast('success', '', 'Item successfully added to wishlist');
        // }
      }
    } else {
      showToast("warning", "", "Kindly Login");
    }
  }

  async function purchaseBook() {
    try {
      if (userData.purchases.includes(productDetails.bookId))
        return showToast("error", "Already Purchased");
      if (userData.credits < productDetails.price) {
        showToast("error", "Not Enough Credits");
        return;
      }
      const id = productDetails.bookId;
      console.log({ id });
      console.log({ token });
      await axios
        .post(
          `http://localhost:5000/api/product/purchase/${id}`,
          { id },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log("This is res - ", res);
          setProductDetails(res.data.product);
          setLoading(false);
          showToast("success", "Book Purchased Succesfully");
        })
        .finally(() => {
          getUserData();
        })
        .catch((err) => {
          showToast("error", "Not Enough Credits");
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const loadingObj = {
    loop: true,
    autoplay: true,
    animationData: LoadingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (loading) {
    return (
      <div className="new-arrivals-container">
        <Lottie
          options={loadingObj}
          height={380}
          style={{ margin: "auto" }}
          isStopped={false}
          isPaused={false}
        />
      </div>
    );
  }

  return (
    <>
      <div className="product-page-container">
        {console.log("PURCHASED - ", purchased)}
        <div className="product-page-item">
          <img
            className="bookcover-image"
            src={productDetails.image}
            alt={productDetails.title}
          ></img>
          <div className="item-details">
            <h2>{productDetails.title}</h2>
            <hr></hr>
            <p>
              <b>Author : </b> &nbsp;&nbsp; <span>{productDetails.author}</span>{" "}
            </p>
            <p className="item-description">
              <b>Description : </b> &nbsp;&nbsp;{" "}
              <span>{productDetails.description.substring(0, 500)}...</span>{" "}
            </p>
            <p className="item-rating">
              <b>Rating : </b> &nbsp;&nbsp; <span>{4.3}</span>{" "}
            </p>
            <p>
              <b>Genre : </b> &nbsp;&nbsp; <span>{productDetails.genre}</span>{" "}
            </p>
            <h3 className="item-price-details">
              Rs. {productDetails.price * 2 - productDetails.price}
              &nbsp;&nbsp;
              <del>Rs. {productDetails.price * 2}</del> &nbsp;&nbsp;
              <span className="discount-on-item">({50}% off)</span>
            </h3>
            {outOfStock === true && (
              <p className="out-of-stock-text">
                Item is currently out of stock
              </p>
            )}
            {outOfStock === true ? (
              <div className="item-buttons">
                <button className="item-notify-me-btn solid-primary-btn">
                  Notify Me
                </button>
              </div>
            ) : (
              <div className="item-buttons">
                {userData.purchases.includes(id) ? (
                  <Link to="/read-book" className="solid-warning-btn">
                    <button className="solid-warning-btn">Read Book</button>
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        addItemToWishlist();
                      }}
                      className="solid-primary-btn"
                    >
                      Add to wishlist
                    </button>
                    <button
                      onClick={purchaseBook}
                      className="solid-warning-btn"
                    >
                      Buy Now
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <h1 className="homepage-headings">Recommendations for the book</h1>
      <RecommendBooks bookId={id} />
    </>
  );
}

export { ProductPage };
