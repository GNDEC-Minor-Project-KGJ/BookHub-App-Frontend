import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import LibraryIllustration from '../..//Assets/Images/library-3.avif';
import './Home.css';
import jwt_decode from 'jwt-decode';
import {
  GenreCard,
  NewArrivals,
  Footer,
  Featured,
  useWishlist,
  useCart,
  useToast,
} from '../../index.js';
import { useProductAvailable } from '../../Context/product-context';
import { useGenre } from '../../Context/genre-context';

import { BusinessBooks } from '../../Components/BusinessBooks/BusinessBooks';
import { NonFictionBooks } from '../../Components/NonFictionBooks/NonFictionBooks';

function Home() {
  const { dispatchProductFilterOptions } = useProductAvailable();
  const { dispatchUserWishlist } = useWishlist();
  const { dispatchUserCart } = useCart();
  const {
    setFictionCategoryCheckbox,
    setThrillerCategoryCheckbox,
    setTechCategoryCheckbox,
    setPhilosophyCategoryCheckbox,
    setRomanceCategoryCheckbox,
    setMangaCategoryCheckbox,
  } = useGenre();
  const { showToast } = useToast();
  const { pathname } = useLocation();

  const businessSectionRef = React.useRef(null);
  const nonFictionSectionRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = 'BookHub | Home';
    const token = localStorage.getItem('token');

    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem('token');
      } else {
        try {
          (async function getUpdatedWishlistAndCart() {
            let updatedUserInfo = await axios.get(
              `http://localhost:5000/api/user`,
              {
                headers: {
                  'x-access-token': localStorage.getItem('token'),
                },
              }
            );
          })();
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, []);

  const showMessage = () => {
    showToast('success', 'Coming Soon!');
  };

  return (
    <div className="home-component-container">
      <div className="home-page-img-container">
        <img
          className="home-page-background-img"
          src={LibraryIllustration}
          alt="Library Illustration"
        />
      </div>

      <h1 className="homepage-headings">Genres</h1>
      <div className="genre-cards-container">
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: '0',
            shadow: 'none',
          }}
          onClick={() => {
            window.location.replace('/#Business');
            businessSectionRef.current.focus();
          }}
        >
          <GenreCard genretype="Business" />
        </button>

        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: '0',
            shadow: 'none',
          }}
          onClick={() => {
            window.location.replace('/#Non-Fiction');
            nonFictionSectionRef.current.focus();
          }}
        >
          <GenreCard genretype="Non-Fiction" />
        </button>
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: '0',
            shadow: 'none',
          }}
          onClick={() => {
            showMessage();
          }}
          to={''}
        >
          <GenreCard genretype="Fiction" />
        </button>
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: '0',
            shadow: 'none',
          }}
          onClick={() => {
            showMessage();
          }}
          to={''}
        >
          <GenreCard genretype="Thriller" />
        </button>
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: '0',
            shadow: 'none',
          }}
          onClick={() => {
            showMessage();
          }}
          to={''}
        >
          <GenreCard genretype="Tech" />
        </button>
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: '0',
            shadow: 'none',
          }}
          onClick={() => {
            showMessage();
          }}
          to={''}
        >
          <GenreCard genretype="Philosophy" />
        </button>
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: '0',
            shadow: 'none',
          }}
          onClick={() => {
            showMessage();
          }}
          to={''}
        >
          <GenreCard genretype="Romance" />
        </button>
        <button
          style={{
            border: 'none',
            outline: 'none',
            padding: '0',
            shadow: 'none',
          }}
          onClick={() => {
            showMessage();
          }}
          to={''}
          state={{ navigate: true }}
        >
          <GenreCard genretype="Manga" />
        </button>
      </div>

      <Link to={'/shop'}>
        <button
          onClick={() => {
            setFictionCategoryCheckbox(true);
            setThrillerCategoryCheckbox(true);
            setTechCategoryCheckbox(true);
            setPhilosophyCategoryCheckbox(true);
            setRomanceCategoryCheckbox(true);
            setMangaCategoryCheckbox(true);
            dispatchProductFilterOptions({ type: 'RESET_DEFAULT_FILTERS' });
          }}
          className="solid-secondary-btn homepage-explore-all-btn"
        >
          Explore Shop
        </button>
      </Link>

      <h1 className="homepage-headings">Top Rated Books</h1>
      <NewArrivals />
      <h1 className="homepage-headings">Featured Books</h1>
      <Featured />
      <section ref={businessSectionRef}>
        <h1 id="Business" className="homepage-headings">
          Recommendations on Business Genre
        </h1>
        <BusinessBooks />
      </section>
      <section id="Non-Fiction" ref={nonFictionSectionRef}>
        <h1 className="homepage-headings">
          Recommendations on Non-Fiction Genre
        </h1>
      </section>
      <NonFictionBooks />
      <Footer />
    </div>
  );
}

export { Home };
