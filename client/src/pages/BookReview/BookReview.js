import React, { useState, useEffect } from "react";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import "./BookReview.css";
import { getNotesDetails } from "../../logic/getDetails";
import styled from "styled-components";
import { connect } from "react-redux";

const BookTitle = styled.h1`
  flex: 1;
  font-weight: 500;
  color: #1c3d5a;
  font-size: 20px;
`;

const BookAuthor = styled.h1`
  flex: 1;
  color: #8795a1;
  font-size: 20px;
`;

const BookReview = (props) => {
  const [notesDetails, setNotesDetails] = useState([]); // array of objects

  useEffect(() => {    
    getNotes();
  }, [props.bookDetails]);

  const getNotes = async () => {
    let tempTitle;
    if (!props.bookDetails) {
      tempTitle = "The 5 AM Club";
    } else {
      tempTitle = props.bookDetails.title;
    }

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
        {Object.entries(props.bookDetails).length !== 0 ? (
          <div>
            <div className="brev-header">
              <BookTitle>{props.bookDetails.title}</BookTitle>
              <BookAuthor>{props.bookDetails.author}</BookAuthor>
            </div>
            <div className="drev-columns">
              <div className="column is-1 nav-arrow-left"></div>
              <div className="column is-1 drev-main-highlights-column">
                {notesDetails.map((note, id) => (
                  <div key={id}>
                    <ReviewCard
                      title={note.bookTitle}
                      author={props.bookDetails.author}
                      note={note.noteText}
                      id={note._id}
                      favourite={note.favourite}
                    />
                  </div>
                ))}
              </div>

              <div className="column is-1 nav-arrow-right"></div>
            </div>
          </div>
        ) : (
          <div>
            <h2>You have not selected a book for review yet!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookDetails: state.notes.bookReview,
  };
};

export default connect(mapStateToProps)(BookReview);
