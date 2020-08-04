import React, { useState, useEffect } from "react";
import "./DailyReview.css";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { getMasteryNotes } from "../../logic/getDetails";
import {
  NotesCol,
  CarouselLockup,
  Wrapper,
  Slide,
  SliderContent,
} from "./styles.js";
import cx from "classnames";

const DailyReview = () => {
  const [reviewNotes, setReviewNotes] = useState();
  const [currNoteIdx, setCurrNoteIdx] = useState(0); // default first note
  const [viewType, setViewType] = useState(false);
  const [leftArrowHidden, setLeftArrowHidden] = useState(true);
  const [rightArrowHidden, setRightArrowHidden] = useState(true);

  const handleRightArrowClick = () => {
    setCurrNoteIdx(currNoteIdx + 1);
  };

  const handleLeftArrowClick = () => {
    setCurrNoteIdx(currNoteIdx - 1);
  };

  useEffect(() => {
    if (reviewNotes) {
      currNoteIdx === reviewNotes.length - 1
        ? setRightArrowHidden(true)
        : setRightArrowHidden(false);

      currNoteIdx == 0 ? setLeftArrowHidden(true) : setLeftArrowHidden(false);
    }
  }, [currNoteIdx, reviewNotes]);

  const viewTypeScroll = cx("toggle-option", {
    "toggle-selected": viewType,
  });

  const arrowContainerLeft = cx("fa", "fa-arrow-left", "fa-2x", "arrow-icon");

  const arrowContainerRight = cx("fa", "fa-arrow-right", "fa-2x", "arrow-icon");

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

  const handleViewChange = () => {
    setViewType(!viewType);
    if (!viewType) {
      setLeftArrowHidden(true);
      setRightArrowHidden(true);
    } else {
      setCurrNoteIdx(0);
      setRightArrowHidden(false);
    }
  };

  return (
    <div className="drev-outer-container">
      <div className="progress-container">
        <div className="progress review-progress">
          <div
            className="progress-bar review-progress-bar review-progress"
            role={"progressbar"}
            aria-valuenow={"75"}
            aria-valuemin={"0"}
            aria-valuemax={"100"}
          ></div>
        </div>
      </div>
      <div className="display-mode-toggle" onClick={handleViewChange}>
        <div className={viewTypeScroll}>Scroll</div>
        <div className={viewTypeReview}>Review</div>
      </div>
      <div className="drev-header"></div>
      <div className="drev-columns">
        {!leftArrowHidden ? (
          <div
            onClick={handleLeftArrowClick}
            className="arrow-column arrow-column-left"
          >
            <i className={arrowContainerLeft} aria-hidden="true"></i>
          </div>
        ) : null}

        {reviewNotes && !viewType ? (
          <CarouselLockup data-testid="test">
            <Wrapper>
              <SliderContent
                index={currNoteIdx}
                transition={1}
                totalSlides={reviewNotes.length}
                data-testid="carousel-lockup"
              >
                {reviewNotes.map((note, index) => (
                  <Slide
                    key={index}
                    id={
                      currNoteIdx === index ? "active-slide" : "inactive-slide"
                    }
                  >
                    <ReviewCard
                      key={index}
                      title={note.bookTitle}
                      author={note.bookAuthor}
                      note={note.noteText}
                      id={note._id}
                      favourite={note.favourite}
                    />
                  </Slide>
                ))}
              </SliderContent>
            </Wrapper>
          </CarouselLockup>
        ) : reviewNotes && viewType ? (
          <NotesCol>
            {reviewNotes.map((note, index) => (
              <ReviewCard
                key={index}
                title={note.bookTitle}
                author={note.bookAuthor}
                note={note.noteText}
                id={note._id}
                favourite={note.favourite}
              />
            ))}
          </NotesCol>
        ) : null}

        {!rightArrowHidden ? (
          <div
            onClick={handleRightArrowClick}
            className="arrow-column arrow-column-right"
          >
            <i className={arrowContainerRight} aria-hidden="true"></i>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DailyReview;
