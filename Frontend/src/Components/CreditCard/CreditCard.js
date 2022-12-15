import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './CreditCard.css';

function CreditCard({ credit }) {
  let navigate = useNavigate();
  const [paymentLink, setPaymentLink] = useState('#');
  // const [userData, setUserData] = useState(
  //   JSON.parse(localStorage.getItem('user')) || ''
  // );

  let userData = JSON.parse(localStorage.getItem('user')) || {};

  const getToken = () => {
    const token = localStorage.getItem('token');
    return token;
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
    if (newWindow) newWindow.opener = null;
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

  // axios request to make payment with amount
  const createPayment = async () => {
    await axios
      .post(
        'http://localhost:5000/api/payment/create-payment',
        { amount: credit.amount },
        {
          headers: { Authorization: `Bearer ` + getToken() },
        }
      )
      .then((res) => {
        console.log(res.data.paymentLink);
        setPaymentLink(res.data.paymentLink);
        // history.push(res.data.paymentLink);
        console.log(paymentLink);
        openInNewTab(res.data.paymentLink);
      })
      .finally(() => {
        getUserData();
      })
      .catch((error) => {
        console.log(error);
        setPaymentLink('#');
      });
  };

  return (
    <div className="card">
      <h2 style={{ textAlign: 'center' }}>{credit.credits} Credits</h2>
      <h3 style={{ textAlign: 'center', margin: '0' }}>
        &#8377; {credit.amount}
      </h3>
      <button
        className="button"
        onClick={createPayment}
        style={{
          padding: '10px 20px',
          margin: '5px 0',
          cursor: 'pointer',
          fontSize: '25px',
        }}
      >
        Buy
      </button>
    </div>
  );
}

export default CreditCard;
