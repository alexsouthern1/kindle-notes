import React from "react";
// This will be displayed on the dashboard
import "./infocard.css"

const InfoCard = ({cardDetails}) => {
  return (
    <div>
      <a href={cardDetails.urlRef}>
        <h5 className="dashboard-title important-title">
          <i className={cardDetails.icon} aria-hidden="true"></i>
          {cardDetails.cardTitle}
          <span className="dashboard-sub">{cardDetails.cardTitle}</span>
        </h5>
      </a>
    </div>
  );
};

export default InfoCard;
