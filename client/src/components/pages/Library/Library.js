import React, {useState, useEffect} from "react";
import "./Library.css";
import Book from "../../Book/Book";
import {sendDetails, sendApi } from "../../../logic/sendDetails"
import {getBooks } from "../../../logic/getDetails"

const Library = () => {
  const [books, setBooks] = useState([]);  

  useEffect(() => {
    console.log("FOCUS: " + books);    
  }, [books])

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("Clicked submit");
    
    try {
      const res = await getBooks();
      setBooks(res);
      console.log('res is ', res);
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
                <Book title={book.title} author={book.author} notesCount={book.notesCount} importDate={book.importDate}/>
              </div>
            ))}            
          </div>
        </div>
      </div>
      <button class="btn btn-primary btn-text" onClick={handleSubmit}>Refresh List</button>
    </div>
  );
};

export default Library;
