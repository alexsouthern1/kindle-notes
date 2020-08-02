import React, { useState, useEffect } from "react";
import "./DailyReview.css";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { getMasteryNotes } from "../../logic/getDetails";
import styled from "styled-components";
import cx from "classnames";

const DailyReview = () => {
  const [reviewNotes, setReviewNotes] = useState();
  const [viewType, setViewType] = useState(false);

  const viewTypeScroll = cx("toggle-option", {
    "toggle-selected": viewType,
  });

  const viewTypeReview = cx("toggle-option", {
    "toggle-selected": !viewType,
  });

  useEffect(() => {
    handleGetMasteryNotes();
  }, []);

  const handleGetMasteryNotes = async () => {
    const tmp = await getMasteryNotes();
    setReviewNotes(tmp);
  };

  const NotesCol = styled.div`
    display: grid;
    grid-template-columns: ${(props) => (props.boolVar ? "1fr 1fr" : "1fr")};
  `;

  const handleViewChange = () => {
    console.log("FOCUS 3");
    console.log(viewType);
    setViewType(!viewType);
  };

  return (
    <div className="drev-outer-container">
      <div className="display-mode-toggle" onClick={handleViewChange}>
        <div className={viewTypeScroll}>Scroll</div>
        <div className={viewTypeReview}>Review</div>
      </div>
      <div className="drev-header"></div>
      <div className="drev-columns">
        <div className="column is-1 nav-arrow-left"></div>

        <div className="column is-1 drev-main-highlights-column">
          <NotesCol boolVar={viewType} onClick={handleViewChange}>
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
                    <div className="review-scroller">
                      <div className="circle-parent">
                        <div className="circle-button">
                          <i className="fas fa-angle-right fa-2x"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </NotesCol>
        </div>
        <div className="column is-1 nav-arrow-right"></div>
      </div>
    </div>
  );
};

export default DailyReview;
