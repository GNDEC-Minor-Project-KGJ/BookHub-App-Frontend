import React, { useEffect } from 'react';
import './ProductPage.css';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useToast, useWishlist, useCart } from '../../index';

import { RecommendBooks } from '../../Components/RecommendBooks/RecommendBooks';

function ProductPage() {
  const navigate = useNavigate();
  // const PURCHASED_BOOKS = [
  //   'Bullshit Jobs: A Theory',
  //   'Principles of Marketing',
  //   'When to Rob a Bank',
  //   'The Business School For People Who Like Helping People',
  //   'Naked Statistics: Stripping the Dread from the Data',
  //   'McKinsey Mind',
  // ];

  const { dispatchUserWishlist } = useWishlist();
  const { dispatchUserCart } = useCart();
  const { showToast } = useToast();
  const { id } = useParams();
  const [productDetails, setProductDetails] = React.useState([
    {
      _id: '6399cab4e1fdf1923cec8986',
      title: 'Adapt: Why Success Always Starts with Failure',
      desc: 'Author Q&A with Tim Harford    So are you an economic missionary, or is this just something that you love to do? It began as something that I love to do--and I think I am now starting to get a sense of it being a mission. People can use economics and they can use statistics and numbers to get at the truth and there is a real appetite for doing so. This is such a BBC thing to say--there’s almost a public service mission to be fulfilled in educating people about economics. When I wrote The Undercover Economist, it was all about my pure enthusiasm for the subject; the book is full of stuff I wanted to say and that is always the thing with the books: they are always such fun to write. Do you think that people these days are generally more economically literate?  People are now aware of economics for various reasons. There are the problems with the economy--there is always more interest in economics when it is all going wrong.  Where is the border line in your new book between economics and sociology?  I don’t draw a border line, and particularly not with the new book. The Undercover Economist was basically all the cool economics I could think of and The Logic of Life was me investigating a particular part of economics. All of the references in The Logic of Life were academic economics papers that I had related--and hopefully made more fun. This new book, Adapt, is very different. I have started by asking what is wrong with the world, what needs fixing, how does it work--and if economics can tell us something about that (which it can) then I have used it. And if economics is not the tool that you need--if you need to turn to sociology or engineering or biology or psychology--I have, in fact, turned to all of them in this book. If that’s what you need, then that’s where I have gone. So I have written this book in a different way: I started with a problem and tried to figure out how to solve it.  What specific subjects do you tackle? To be a bit more specific, the book is about how difficult problems get solved and I look at quick change; the banking crisis; poverty; innovation, as I think there is an innovation slow-down; and the war in Iraq. Also, I look at both problems in business and in everyday life. Those are the big problems that I look at--and my conclusion is that these sorts of problems only ever get solved by trial and error, so when they are being solved, they are being solved through experimentation, which is often a bottom-up process. When they are not being solved it is because we are not willing to experiment, or to use trial and error.  Do you think companies will change to be much more experimental, with more decisions placed in the hands of employees? I don’t think that is necessarily a trend, and the reason is that the market itself is highly experimental, so if your company isn’t experimental it may just happen to have a really great, successful idea--and that’s fine; if it doesn’t, it will go bankrupt. But that said, it is very interesting to look at the range of companies who have got very into experimentation--they range from the key-cutting chain Timpson’s to Google; you can’t get more different than those two firms, but actually the language is very similar; the recruitment policies are similar; the way the employees get paid is similar.  The “strap line” of the book is that “Success always starts with failure.” You are a successful author… so what was the failure that set you up for success?  I was working on a book before The Undercover Economist… it was going to be a sort of Adrian Mole/Bridget Jones’ Diary-styled fictional comedy, in which the hero was this economist and through the hilarious things that happened to him, all these economic principles would be explained--which is a great idea--but the trouble is that I am not actually funny. Another example would be my first job as a management consultant… and I was a terrible management consultant. I crashed out after a few months. Much better that, than to stick with the job for two or three years-- a lot of people say you have got to do that to “show your commitment.” Taking the job was a mistake--why would I need to show my commitment to a mistake? Better to realise you made a mistake, stop and do something else, which I did.  That idea that “failure breeds success” is central to most entrepreneurs. Do you think we need more of it in the UK? I think that the real problem is not failure rates in business; the problem is failure rates in politics. We need a much higher failure rate in politics. What actually happens is politicians--and this is true of all political parties--have got some project and they’ll say, “Right, we are going to do this thing,” and it is quite likely that idea is a bad idea--because most ideas fail; the world is complicated and while I don’t have the numbers for this, most ideas are, as it turns out, not good ideas.  But they never collect the data, or whatever it is they need to measure, to find out where their idea is failing. So they have this bad idea, roll this bad idea out and the bad idea sticks, costs the country hundreds, millions, or billions of pounds, and then the bad idea is finally reversed by the next party on purely ideological grounds and you never find out whether it really worked or not. So we have this very, very low willingness to collect the data that would be necessary to demonstrate failure, which is the bit we actually need.  To give a brief example: Ken Livingstone, as Mayor of London, came along and introduced these long, bendy buses. Boris Johnson came along and said, “If you elect me, I am going to get rid of those big bendy buses and replace them with double-decker buses.” He was elected and he did it, so… which one of them is right? I don’t know. I mean, isn’t that crazy? I know democracy is a wonderful thing and we voted for Ken Livingstone and we voted for Boris Johnson, but it would be nice to actually have the data on passenger injury rates, how quickly people can get on and off these buses, whether disabled people are using these buses… the sort of basic evidence you would want to collect.  Based on that, are you a supporter of David Cameron’s “Big Society”, which in a sense favours local experimentation over central government planning?  Well, I have some sympathy for the idea of local experimentation, but what worries me is that we have to have some mechanism that is going to tell you what is working and what is not--and there is no proposal for that. Cameron’s Tories seem to have the view that ‘if it is local then it will work.’ In my book, I have all kinds of interesting case studies of situations where localism really would have worked incredibly well, as in, say, the US Army in Iraq. But I have also got examples of where localism did not work well at all--such as a corruption-fighting drive in Indonesia.  Is the new book, Adapt, your movement away from economic rationalist to management guru? Are you going to cast your eye over bigger problems? The two changes in Adapt are that I have tried to start with the problem, rather than saying, “I have got a hammer--I’m going to look for a nail.” I started with a nail and said, “Ok, look, I need to get this hammered in.” So I have started with the problem and then looked anywhere for solutions. And the second thing is that I have tried to do is write with more of a narrative. This is not a Malcolm Gladwell book, but I really admire the way that people like Gladwell get quite complex ideas across because they get you interested in the story; that is something that I have tried to do more of here. I am not too worried about it, because I know that I am never going to turn into Malcolm Gladwell--I am always going to be Tim Harford--but it doesn’t hurt to nudge in a certain direction.  On Amazon, we recommend new book ideas to people: “If you like Tim Harford you may like…”, but what does Tim Harford also like? I read a lot of books, mostly non-fiction and in two categories: people who I think write a lot better than I do, and people who think about economics more deeply than I do. In the first category I am reading people like Michael Lewis, Kathryn Schulz (I loved her first book, Being Wrong), Malcolm Gladwell and Alain de Botton. In the second category, I read lots of technical economics books, but I enjoy Steven Landsburg, Edward Glaeser (who has a book out now which looks good), Bill Easterly… I don’t necessarily agree with all of these people!  When I am not reading non-fiction, I am reading comic books or 1980s fantasy authors like Jack Vance.',
      price: 100,
      genre: 'Business',
      image:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1330364527l/10158633.jpg',
      author: 'Tim Harford',
      rating: 3.88,
      bookId: '34',
      word_count: 1562,
      createdAt: '2022-12-14T13:08:04.638Z',
      updatedAt: '2022-12-14T13:08:04.638Z',
      __v: 0,
    },
  ]);

  const [loading, setLoading] = React.useState(true);
  const token = localStorage.getItem('token');

  // useEffect(() => {
  //   async function getDetails() {
  //     await axios
  //       .get(`http://localhost:5000/api/product/${bookId}`, {
  //         headers: {
  //           headers: { Authorization: `Bearer ${token}` },
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res.data.product);
  //         setProductDetails(res.data.product);
  //       });
  //   }
  //   getDetails();
  // }, []);

  useEffect(() => {
    setLoading(true);
    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem('token');
      } else {
        (async function getDetails() {
          console.log({ id });
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
            });
        })();
      }
    }
  }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     const user = jwt_decode(token);
  //     if (!user) {
  //       localStorage.removeItem('token');
  //     } else {
  //       (async function getUpdatedWishlistAndCart() {
  //         let updatedUserInfo = await axios.get(
  //           'http://localhost:5000/api/user',
  //           {
  //             headers: {
  //               'x-access-token': localStorage.getItem('token'),
  //             },
  //           }
  //         );

  //         if (updatedUserInfo.data.status === 'ok') {
  //           dispatchUserWishlist({
  //             type: 'UPDATE_USER_WISHLIST',
  //             payload: updatedUserInfo.data.user.wishlist,
  //           });
  //           dispatchUserCart({
  //             type: 'UPDATE_USER_CART',
  //             payload: updatedUserInfo.data.user.cart,
  //           });
  //         }
  //       })();
  //     }
  //   }
  // }, []);

  async function addItemToWishlist() {
    const token = localStorage.getItem('token');

    if (token) {
      const user = jwt_decode(token);

      if (!user) {
        localStorage.removeItem('token');
        showToast('warning', '', 'Kindly Login');
        navigate('/login');
      } else {
        let wishlistProducts =
          JSON.parse(localStorage.getItem('wishlistProducts')) || [];
        showToast('success', '', 'Item successfully added to wishlist');
        console.log(wishlistProducts);
        wishlistProducts.push(productDetails);

        localStorage.setItem(
          'wishlistProducts',
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
      showToast('warning', '', 'Kindly Login');
    }
  }

  async function addItemToCart() {
    const token = localStorage.getItem('token');

    if (token) {
      const user = jwt_decode(token);

      if (!user) {
        localStorage.removeItem('token');
        showToast('warning', '', 'Kindly Login');
        navigate('/login');
      } else {
        showToast('success', '', 'Item successfully added to cart');
        let cartProducts =
          JSON.parse(localStorage.getItem('cartProducts')) || [];
        console.log(cartProducts);
        cartProducts.push(productDetails);

        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

        // let cartUpdateResponse = await axios.patch(
        //   'http://localhost:5000/api/cart',
        //   {
        //     productdetails,
        //   },
        //   {
        //     headers: {
        //       'x-access-token': localStorage.getItem('token'),
        //     },
        //   }
        // );
        // if (cartUpdateResponse.data.status === 'ok') {
        //   dispatchUserCart({
        //     type: 'UPDATE_USER_CART',
        //     payload: cartUpdateResponse.data.user.cart,
        //   });
        //   showToast('success', '', 'Item successfully added to cart');
        // }
      }
    } else {
      showToast('warning', '', 'Kindly Login');
    }
  }

  const outOfStock = false;

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="product-page-container">
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
              <b>Author : </b> &nbsp;&nbsp; <span>{productDetails.author}</span>{' '}
            </p>
            <p className="item-description">
              <b>Description : </b> &nbsp;&nbsp;{' '}
              <span>{productDetails.description.substring(0, 500)}...</span>{' '}
            </p>
            <p className="item-rating">
              <b>Rating : </b> &nbsp;&nbsp; <span>{4.3}</span>{' '}
            </p>
            <p>
              <b>Genre : </b> &nbsp;&nbsp; <span>{productDetails.genre}</span>{' '}
            </p>
            <h3 className="item-price-details">
              Rs.{' '}
              {productDetails.word_count * 10 - productDetails.word_count * 1}
              &nbsp;&nbsp;
              <del>Rs. {productDetails.word_count * 10}</del> &nbsp;&nbsp;
              <span className="discount-on-item">({20}% off)</span>
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
                  onClick={() => {
                    addItemToCart();
                  }}
                  className="solid-warning-btn"
                >
                  Add to cart
                </button>
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
