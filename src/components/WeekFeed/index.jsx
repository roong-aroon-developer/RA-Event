import React, { Fragment } from 'react'
import { weekData } from '../../store/weekFeedMock.js'
import MediaControlCard  from './WeekCard/index'

import './WeekFeed.css'
    
const WeekFeed = () => {
    return(
      <Fragment>  
        <div className="WeekText">
            This Week
        </div>  
        {
            weekData.map(data => (
                <MediaControlCard key={data.name}/>
            ))
        }
      </Fragment>  
    );
        
}

export default WeekFeed;