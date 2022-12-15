import React from 'react';
import CreditCard from '../../Components/CreditCard/CreditCard';

import './BuyCredits.css';

function Buy_Credits() {
  document.title = 'Buy Credits';
  let data = [
    {
      credits: 10,
      amount: 10,
    },
    {
      credits: 50,
      amount: 50,
    },
    {
      credits: 100,
      amount: 100,
    },
    {
      credits: 200,
      amount: 200,
    },
    {
      credits: 500,
      amount: 500,
    },
    {
      credits: 1000,
      amount: 1000,
    },
  ];

  return (
    <div className="container">
      <div className="inner">
        <div className="heading">Buy Credits</div>
        {data.map((credit) => {
          return (
            <CreditCard key={credit.credits + 1} credit={credit}></CreditCard>
          );
        })}
      </div>
    </div>
  );
}

export default Buy_Credits;
