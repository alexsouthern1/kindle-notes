import React, { useState, useEffect } from "react";
import "./Library.css";
import Book from "../../components/Book/Book";
import { getBooks } from "../../logic/getDetails";

const Library = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async (e) => {
    try {
      const res = await getBooks();
      setBooks(res);
      console.log("res is ", res);
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
            {books.map((book) => (
              <div className="book-row-parent">
                <Book
                  title={book._id.title}
                  author={book._id.author}
                  notesCount={book.count}
                  importDate={book.date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        style={{ marginTop: "2.5%", marginBottom: "2.5%" }}
        class="btn btn-primary btn-text"
        onClick={handleSubmit}
      >
        Refresh List
      </button>
    </div>
  );
};

export default Library;
