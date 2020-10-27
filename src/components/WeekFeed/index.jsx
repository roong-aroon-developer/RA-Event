import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
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
            <Link style={{textDecoration: "none"}} to={{
              pathname: data.path,}}
              key={data.name}>
                <MediaControlCard />
            </Link>
            ))
        }
      </Fragment>  
    );
        
}

export default WeekFeed;