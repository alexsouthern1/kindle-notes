import React, { useEffect } from "react";
// This will be displayed on the dashboard
import "./infocard.css"

const InfoCard = ({cardDetails}) => {
  useEffect(() => {

  })
  return (
    <div className="info-card-container">
      <a href={cardDetails.urlRef}>
        <h5 className="dashboard-title important-title">
          <i className={cardDetails.icon} aria-hidden="true"></i>
          {cardDetails.cardTitle}
          <span className="dashboard-sub">{cardDetails.cardSubTitle}</span>
        </h5>
      </a>
    </div>
  );
};

export default InfoCard;
