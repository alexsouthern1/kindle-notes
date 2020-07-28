import React, { useState, useEffect } from "react";
import "./Book.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setBookReview } from "../../redux";

const Book = ({
  title,
  author,
  notesCount,
  importDate,
  setBookReview,
  bookDetails,
}) => {
  const handleClickBook = () => {
    try {
      const bookDetails = { title, author };
      setBookReview(bookDetails);
    } catch (err) {
      console.log("error occ :( ");
      console.log(err);
    }
  };

  return (
    <div className="book-row">
      <div style={{ minWidth: 40 }}>
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Publication128/v4/f3/69/5f/f3695f43-ade6-325d-ff22-2038d07d0b43/9780008312855.jpg/1400x2141w.jpg"
          width="30px"
          height="45px"
          className="book-row-image"
        />
      </div>

      <div className="book-row-box" onClick={handleClickBook}>
        <Link
          to="bookreview:"
          style={{ textDecoration: "none", color: "#222" }}
        >
          <b className="book-row-title">{title}</b>
          <span style={{ whiteSpace: "nowrap", fontWeight: "lighter" }}>
            {" "}
            by {author}
          </span>
        </Link>
        <span className="badge">{notesCount}</span>
      </div>

      <div className="date-div">{importDate}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookDetails: state.notes.bookReview,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBookReview: (bookDetails) => dispatch(setBookReview(bookDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
