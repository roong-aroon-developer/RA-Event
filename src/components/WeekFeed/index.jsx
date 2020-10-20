import React, { Fragment } from 'react'
import { weekData } from '../../store/WeekFeedMock'
import './WeekFeed.css'
    
const WeekFeed = () => {
    return(
      <Fragment>  
      {
          weekData.map(data => (
              <div className="WeekBubble"/>
          ))
      }
      </Fragment>  
    );
        
}

export default WeekFeed;