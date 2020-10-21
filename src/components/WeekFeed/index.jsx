import React, { Fragment } from 'react'
import { weekData } from '../../store/weekFeedMock.js'
import './WeekFeed.css'
    
const WeekFeed = () => {
    return(
      <Fragment>  
        <div className="WeekText">
            This Week
        </div>  
        {
            weekData.map(data => (
                <div key={data.name} className="WeekBubble"/>
            ))
        }
      </Fragment>  
    );
        
}

export default WeekFeed;