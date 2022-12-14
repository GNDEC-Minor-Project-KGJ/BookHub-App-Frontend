import './ProductOrderCard.css';
import { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useToast, useOrders } from '../../index';

function ProductOrderCard({ productDetails }) {
  const { dispatchUserOrders } = useOrders();
  const navigate = useNavigate();

  const { showToast } = useToast();
  const {
    id,
    title,
    author,
    originalPrice = 100,
    discountedPrice = 80,
    discountPercent = 20,
    image,
    imgAlt = 'cover',
    badgeText = 'on Sale',
    outOfStock = false,
  } = productDetails;

  console.log({ image });

  const _id = id;
  const orderId = id;
  const quantity = 1;
  const imgSrc = image;
  const bookName = title;

  const removeItemFromOrders = async () => {
    let updatedUserInfo = await axios.patch(
      `http://localhost:5000/api/orders/${_id}`,
      {
        orderId,
      },
      {
        headers: { 'x-access-token': localStorage.getItem('token') },
      }
    );
    if (updatedUserInfo.data.status === 'ok') {
      dispatchUserOrders({
        type: 'UPDATE_USER_ORDERS',
        payload: updatedUserInfo.data.user.orders,
      });
    }
  };

  return (
    <div className="card-basic-horizontal">
      <img className="cart-item-book-img" src={imgSrc} alt={title} />
      <div id="cart-item-detail" className="card-item-details">
        <h4 id="item-title">{bookName}</h4>
        <p className="item-author">By &nbsp;{author}</p>

        <div className="item-cart-quantity">
          <p className="cart-quantity-para">Quantity : &nbsp;&nbsp;</p>
          <p>{quantity}</p>
        </div>

        <p className="order-id">Order id: {orderId}</p>

        <div className="cart-horizontal-card-btns card-button">
          <button className="solid-primary-btn" onClick={removeItemFromOrders}>
            Remove item from Order
          </button>
        </div>
        <div className="badge-on-card">{badgeText}</div>
      </div>
    </div>
  );
}

export { ProductOrderCard };
