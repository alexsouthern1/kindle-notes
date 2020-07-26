import React, { useState, useEffect } from "react";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import "./BookReview.css";
import { getNotesDetails } from "../../logic/getDetails";
import styled from "styled-components";

const BookTitle = styled.h1`
flex: 1;
font-weight: 500;
color: #1C3D5A;
font-size: 20px
`;

const BookAuthor = styled.h1`
  flex: 1;
  color: #8795A1;
  font-size: 20px
`;

const BookReview = (props) => {
  const [notesDetails, setNotesDetails] = useState([]); // array of objects
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    getNotes();    
  }, []);

  const getNotes = async () => {
    let tempTitle;
    if (!props.location.state.bookTitle) {
      tempTitle = "The 5 AM Club";
    } else {
      tempTitle = props.location.state.bookTitle;
    }

    setTitle(tempTitle);
    setAuthor(props.location.state.author);

    console.log(title);
    try {
      const res = await getNotesDetails({ title: tempTitle });
      setNotesDetails(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="drev-outer-container">
        <div className="brev-header">
          <BookTitle>{title}</BookTitle>
          <BookAuthor>{author}</BookAuthor>
        </div>
        <div className="drev-columns">
          <div className="column is-1 nav-arrow-left"></div>
          <div className="column is-1 drev-main-highlights-column">
            {notesDetails.map((note, id) => (
              <div key={id}>
                <ReviewCard
                  title={note.bookTitle}
                  author={author}
                  note={note.noteText}
                  id={note.id}
                />
              </div>
            ))}
          </div>

          <div className="column is-1 nav-arrow-right"></div>
        </div>
      </div>
      <button
        style={{ marginTop: "2.5%", marginBottom: "2.5%" }}
        class="btn btn-primary btn-text"
        onClick={getNotes}
      >
        Get Notes
      </button>
    </div>
  );
};

export default BookReview;
