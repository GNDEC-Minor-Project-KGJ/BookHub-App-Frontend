import React from 'react';
import { NewArrivals } from '../../index';

import { BusinessBooks } from '../../Components/BusinessBooks/BusinessBooks';
import { NonFictionBooks } from '../../Components/NonFictionBooks/NonFictionBooks';

import './Profile.css';

function Profile() {
  return (
    <>
      <h2>Profile Page</h2>
      <img
        className="user-img"
        src="https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png"
      />
      <h3>User Name</h3>
      <p className="user-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid.
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
