import React, { useEffect } from "react";
import "./dashboard.css";
import DashboardInfoContainer from "../../components/DashboardInfoContainer/DashboardInfoContainer";
import {infoContainerDetails} from "./infoContainerDetails.js"

const Dashboard = () => {
  

  return (
    <div className="hero section no-bg">
      <div className="container dashboard">
        <h2 className="dashboard-title">Alex's Dashboard</h2>
        <p className="dashboard-sub">
          Explore your highlights, synchronise your data, and change your
          settings.
        </p>
        {Object.keys(infoContainerDetails).map((key, index) => (
          <div key={index}>
            <DashboardInfoContainer
              infoContainerDetails={infoContainerDetails[key]}
            />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Dashboard;
