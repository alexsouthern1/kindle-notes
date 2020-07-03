import React from 'react'
import "./Book.css"

const Book = ({title, author, notesCount, importDate}) => {
  return (
    <div className="book-row">
      <p className="book-row-author">{title} | </p>
      <p>Author: {author}</p>
      <p>Number of notes: {notesCount}</p>
      <p className="book-row-date">Imported: {importDate}</p>
    </div>
  )
}

export default Book
