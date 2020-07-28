import React from 'react'
import "./dashboard.css"
import InfoCard from '../../components/InfoCard/InfoCard'

const Dashboard = () => {

  const reviewInfoCardDetails = {
    icon: "fa fa-sun-o",
    cardTitle: " Daily Readwise ",
    cardSubTitle: "(your daily dose of wisdom)",
    urlRef: "/dailyreview"    
  }

  return (
    <div>
      {/* <InfoCard cardDetails={reviewInfoCardDetails}/> */}
    </div>
  )
}

export default Dashboard
