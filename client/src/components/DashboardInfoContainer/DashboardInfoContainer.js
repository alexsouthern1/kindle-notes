import React, { useEffect} from 'react'
import InfoCard from '../InfoCard/InfoCard'

const DashboardInfoContainer = ({infoContainerDetails}) => {
  useEffect(() => {
    
    infoContainerDetails.content.map(val => {
      console.log(val);
    })
  }, [])
  return (
    <div>
      <h4 className="dashboard-title">{infoContainerDetails.title}</h4>
      {infoContainerDetails.content.map((content, id) => (
        <div>
          <InfoCard cardDetails={content}/>
        </div>
      ))}
    </div>
  )
}

export default DashboardInfoContainer
