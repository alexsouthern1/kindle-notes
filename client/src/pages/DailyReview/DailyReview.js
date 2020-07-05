import React from "react";
import "./DailyReview.css";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const DailyReview = () => {
  return (
    <div className="drev-outer-container">
      <div className="drev-header">
        <div style={{ flex: 2 }}>Your Daily Review (1 of 6)</div>
        <div style={{ flex: 1 }}>Toggle</div>
      </div>
      <div className="drev-columns">
        <div className="column is-1 nav-arrow-left"></div>
        <div className="column is-1 drev-main-highlights-column">
          <ReviewCard />
        </div>

        <div className="column is-1 nav-arrow-right"></div>
      </div>
      Hello from Daily review
    </div>
  );
};

export default DailyReview;
