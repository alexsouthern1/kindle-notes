import React, { useState, useEffect } from "react";
import "./DailyReview.css";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { getMasteryNotes } from "../../logic/getDetails";

const DailyReview = () => {
  const [reviewNotes, setReviewNotes] = useState();

  useEffect(() => {
    handleGetMasteryNotes();
  }, []);

  const handleGetMasteryNotes = async () => {
    const tmp = await getMasteryNotes();
    setReviewNotes(tmp);
  };

  return (
    <div className="drev-outer-container">
      <div className="drev-header"></div>
      <div className="drev-columns">
        <div className="column is-1 nav-arrow-left"></div>
        <div className="column is-1 drev-main-highlights-column">
          {reviewNotes
            ? reviewNotes.map((note, id) => (
                <div className="favourites-card" key={id}>
                  <ReviewCard
                    title={note.bookTitle}
                    author={note.bookAuthor}
                    note={note.noteText}
                    id={note._id}
                    favourite={note.favourite}
                  />
                </div>
              ))
            : null}
        </div>
        <div className="column is-1 nav-arrow-right"></div>
      </div>
    </div>
  );
};

export default DailyReview;
