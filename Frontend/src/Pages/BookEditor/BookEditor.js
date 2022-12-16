import './BookEditor.css';
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { useToast } from '../../index';

import MDEditor from './MDEditor/MDEditor';

function BookEditor() {
  const editorRef = React.useRef();
  const [value, setValue] = React.useState('Add Your Book Description!');
  const [bookTitle, setBookTitle] = useState('Theory of Everything');
  const [author, setAuthor] = useState('Warren Buffet');
  const [rating, setRating] = useState(4.1);
  const [genre, setGenre] = useState('Fiction');
  const [url, setUrl] = useState(
    'data:image/jpeg;base64,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'
  );
  const [Loader, setLoader] = useState(false);
  const { showToast } = useToast();

  document.title = 'BookHub | Create-book';
  const token = localStorage.getItem('token');

  // const history = useHistory();

  // axios request to sava a new astrologer or user depending on the role.
  let data = {
    title: bookTitle,
    author,
    rating,
    genre,
    image: url,
    description: value,
  };

  const postData = async () => {
    setLoader(true);
    console.log({ token });
    console.log(data);
    try {
      await axios
        .post('http://localhost:5000/api/product/', data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          setLoader(false);
          showToast('success', 'Book Created Successfully');
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
          showToast('error', 'Something went wrong');
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Create Your Own Book</h2>
      <div className="mainContainer">
        <div className="inner2">
          <div className="row">
            <label htmlFor="Book-Title">Book Title</label>
            <input
              type="text"
              id="Book-Title"
              required
              placeholder="A Brief History of time."
              onChange={(event) => setBookTitle(event.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="Author">Author</label>
            <input
              type="text"
              id="Author"
              required
              placeholder="Stephan Hawking"
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              placeholder="4.1"
              value={4.1}
              onChange={(event) => setRating(event.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              placeholder="Fiction"
              onChange={(event) => setGenre(event.target.value)}
            />
          </div>
          <div className="row">
            <label htmlFor="link">Image Link</label>
            <input
              type="text"
              id="link"
              placeholder="URL"
              onChange={(event) => setUrl(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div style={{ minHeight: '6em', cursor: 'text', padding: '30px' }}>
        <MDEditor value={value} setValue={setValue} />
      </div>
      <button className="sendButton" onClick={postData}>
        {Loader ? 'Saving Data' : 'save data'}
      </button>
    </>
  );
}

export default BookEditor;
