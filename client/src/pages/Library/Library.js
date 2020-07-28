import React, { useState, useEffect } from "react";
import "./Library.css";
import Book from "../../components/Book/Book";
import { getBooks } from "../../logic/getDetails";
import { connect } from "react-redux";
import { setBookList } from "../../redux";

const Library = ({ books, setBookList }) => {
  // const [books, setBooks] = useState([]);
  useEffect(() => {}, [books]);

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async (e) => {
    try {
      const res = await getBooks();
      setBookList(res);
    } catch (err) {
      alert("Error occurred");
      console.error(err);
    }
  };

  return (
    <div className="library-container">
      <div className="library-menu">
        <h1>Your Books</h1>
      </div>
      <div className="library-hero">
        <div classname="container">
          <div className="book-list">
            {books[0] && books[0].length > 0 ? (
              books[0].map((book, id) => (
                <div
                  id={id}
                  className="book-row-parent"
                >
                  <Book
                    title={book._id.title}
                    author={book._id.author}
                    notesCount={book.count}
                    importDate={book.date}
                  />
                </div>
              ))
            ) : (
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
            )}
          </div>
        </div>
      </div>
      <button
        style={{ marginTop: "2.5%", marginBottom: "2.5%" }}
        className="btn btn-primary btn-text"
        onClick={handleSubmit}
      >
        Refresh List
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.notes.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBookList: (books) => dispatch(setBookList(books)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
