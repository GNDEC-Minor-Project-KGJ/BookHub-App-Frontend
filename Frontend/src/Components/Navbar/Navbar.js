import React, { useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {
  useUserLogin,
  useToast,
  useWishlist,
  useCart,
  useOrders,
  useSearchBar,
} from '../../index';
import { BsShopWindow, BsFillBagFill } from 'react-icons/bs';

import axios from 'axios';

function Navbar() {
  const { userWishlist, dispatchUserWishlist } = useWishlist();
  const { userCart, dispatchUserCart } = useCart();
  const { userOrders, dispatchUserOrders } = useOrders();
  const { setUserLoggedIn } = useUserLogin(false);
  const { showToast } = useToast();
  const location = useLocation();
  const { searchBarTerm, setSearchBarTerm } = useSearchBar();

  let userData = JSON.parse(localStorage.getItem('user')) || {};

  const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
  };

  const getUserData = async () => {
    await axios
      .get('http://localhost:5000/api/user', {
        headers: { Authorization: `Bearer ` + getToken() },
      })
      .then((res) => {
        console.log(res.data);
        userData = res.data.user;
        console.log({ userData });
        localStorage.setItem('user', JSON.stringify(userData));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserData();
    console.log(userData);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt_decode(token);

      if (!user) {
        localStorage.removeItem('token');
        setUserLoggedIn(false);
      } else {
        setUserLoggedIn(true);
      }
    }
  }, []);

  // useEffect(() => {
  //   function handleInvalidToken() {
  //     if (localStorage.getItem('token') !== null) {
  //       setUserLoggedIn(true);
  //     } else {
  //       setUserLoggedIn(false);
  //       dispatchUserWishlist({ type: 'UPDATE_USER_WISHLIST', payload: [] });
  //       dispatchUserCart({ type: 'UPDATE_USER_CART', payload: [] });
  //       dispatchUserOrders({ type: 'UPDATE_USER_ORDERS', payload: [] });
  //     }
  //   }
  //   window.addEventListener('storage', handleInvalidToken);

  //   return function cleanup() {
  //     window.removeEventListener('storage', handleInvalidToken);
  //   };
  // }, [userWishlist, userCart]);

  function logoutUser() {
    localStorage.removeItem('token');
    // dispatchUserWishlist({ type: 'UPDATE_USER_WISHLIST', payload: [] });
    // dispatchUserCart({ type: 'UPDATE_USER_CART', payload: [] });
    // dispatchUserOrders({ type: 'UPDATE_USER_ORDERS', payload: [] });
    setUserLoggedIn(false);
    localStorage.clear();
    showToast('success', '', 'Logged out successfully');
  }

  return (
    <div className="top-bar">
      <div className="left-topbar-container">
        {/* <button id="top-bar-ham-menu-btn" className="icon-btn"><i className="fa fa-bars" aria-hidden="true"></i></button> */}
        <Link to="/">
          <h2 className="top-bar-brand-name">BookHub</h2>
        </Link>
        {/* {location.pathname === '/shop' && (
          <div className="search-bar">
            <input
              className="search-bar-input"
              placeholder="Search"
              value={searchBarTerm}
              onChange={(event) => setSearchBarTerm(event.target.value)}
            />
          </div>
        )} */}
      </div>
      <div className="right-topbar-container">
        {localStorage.getItem('token') !== null ? (
          <button
            onClick={logoutUser}
            className="navbar-login-btn solid-primary-btn"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="navbar-login-btn solid-primary-btn">
              Login
            </button>
          </Link>
        )}
        <Link to="/shop">
          <button className="icon-btn">
            <div>
              <BsShopWindow />
            </div>
          </button>
        </Link>
        {/* <Link to="/read-book">
          <button className="icon-btn">
            <div className="icon-count-badge">
              <i className="fa fa-star fa-x" aria-hidden="true"></i>
            </div>
          </button>
        </Link> */}
        {userData.role == 1 && (
          <Link to="/editor">
            <button className="icon-btn">
              <div className="icon-count-badge">
                <i className="fa fa-star fa-x" aria-hidden="true"></i>
              </div>
            </button>
          </Link>
        )}

        <Link to="/wishlist">
          <button className="icon-btn">
            <div className="icon-count-badge">
              <i className="fa fa-heart-o fa-x" aria-hidden="true"></i>
              {userWishlist.length !== 0 && (
                <span className="count-badge-x">{userWishlist.length}</span>
              )}
            </div>
          </button>
        </Link>
        <Link to="/cart">
          <button className="icon-btn">
            <div className="icon-count-badge">
              <i className="fa fa-shopping-cart fa-x" aria-hidden="true"></i>
              {userCart.length !== 0 && (
                <span className="count-badge-x">{userCart.length}</span>
              )}
            </div>
          </button>
        </Link>
        <Link to="/orders">
          <button className="icon-btn">
            <div className="icon-count-badge">
              <BsFillBagFill
                style={{
                  marginBottom: '4px',
                }}
              />
              {userOrders.length !== 0 && (
                <span className="count-badge-x">{userOrders.length}</span>
              )}
            </div>
          </button>
        </Link>
        <Link to="/profile">
          <button className="icon-btn">
            <div className="icon-count-badge">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
          </button>
        </Link>
        <p
          style={{
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            padding: '5px',
            border: '1px solid black',
            marginLeft: '5px',
          }}
        >
          {userData.credit} ©
          <Link
            style={{
              fontSize: '32px',
              marginLeft: '10px',
              color: 'red',
              border: '1px solid black',
              borderRadius: '40%',
            }}
            to="buy-credits"
          >
            +
          </Link>
        </p>
      </div>
    </div>
  );
}

export { Navbar };
