import React from 'react';
import { NewArrivals } from '../../index';

import { BusinessBooks } from '../../Components/BusinessBooks/BusinessBooks';
import { NonFictionBooks } from '../../Components/NonFictionBooks/NonFictionBooks';

import './Profile.css';

let userData = JSON.parse(localStorage.getItem('user')) || {};

function Profile() {
  return (
    <>
      <h2>Profile Page</h2>
      <img
        className="user-img"
        src="https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png"
      />
      <h3>Name - {userData.name}</h3>
      <h3>Email - {userData.email}</h3>
      <h3>Interests - {userData.interest.length} Books</h3>
      <h3>Active Credits - {userData.credit}</h3>
      {/* <div>
        purchese - 
        {userData.purchases.map((interest) => (
          <p>{interest}</p>
        ))}
      </div> */}
      <h3>Role - {userData.role == 1 ? 'Admin' : 'User'}</h3>
      {/* <h3>Created Account at - {userData.createdAt.toDateString()}</h3> */}

      <p className="user-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </p>
      <h1 className="homepage-headings">Recommendations on Business Genre</h1>
      <BusinessBooks />

      <h1 className="homepage-headings">
        Recommendations on Non-Fiction Genre
      </h1>
      <NonFictionBooks />
    </>
  );
}

export default Profile;
