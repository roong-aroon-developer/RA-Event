import React, { Fragment, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { weekData } from '../../store/weekFeedMock.js'
import WeekCardSkeleton from './WeekCardSkeleton'
import './WeekFeed.css'

const WeekCard = lazy(() => import('./WeekCard'))
    
const WeekFeed = () => {
    return(
      <Fragment>  
        <div className="WeekText">
            This Week
        </div>  
        {
            weekData.map(data => (
            <Link style={{textDecoration: "none"}} 
              to={{pathname: data.path,}}
              key={data._id}>
                <Suspense fallback={<WeekCardSkeleton />}>
                  <WeekCard title={data.name} date={data.date} tag={data.tag} alt={data.imgAlt}/>
                </Suspense>
            </Link>
            ))
        }
      </Fragment>  
    );
        
}

export default WeekFeed;