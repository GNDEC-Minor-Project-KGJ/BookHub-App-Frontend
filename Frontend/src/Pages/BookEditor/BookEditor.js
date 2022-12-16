import "./BookEditor.css";
import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import axios from "axios";

import { useToast } from "../../index";

import MDEditor from "./MDEditor/MDEditor";

function BookEditor() {
  const editorRef = React.useRef();
  const [value, setValue] = React.useState("Add Your Book Description!");
  const [bookTitle, setBookTitle] = useState("Theory of Everything");
  const [author, setAuthor] = useState("Warren Buffet");
  const [rating, setRating] = useState(4.1);
  const [genre, setGenre] = useState("Fiction");
  const [url, setUrl] = useState("");
  const [Loader, setLoader] = useState(false);
  const { showToast } = useToast();

  document.title = "BookHub | Create-book";
  const token = localStorage.getItem("token");

  // const history = useHistory();

  // axios request to sava a new astrologer or user depending on the role.

  const postData = async () => {
    let data = {
      title: bookTitle,
      author,
      rating,
      genre,
      image: url,
      description: value,
    };
    setLoader(true);
    console.log({ token });
    console.log(data);
    try {
      await axios
        .post("http://localhost:5000/api/product/", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          setLoader(false);
          showToast("success", "Book Created Successfully");
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
          showToast("error", "Something went wrong");
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
      <div style={{ minHeight: "6em", cursor: "text", padding: "30px" }}>
        <MDEditor value={value} setValue={setValue} />
      </div>
      <button className="sendButton" onClick={postData}>
        {Loader ? "Saving Data" : "save data"}
      </button>
    </>
  );
}

export default BookEditor;
