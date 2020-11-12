import React, { lazy, Suspense} from 'react'
import Carousel from 'react-multi-carousel'
import { Link } from 'react-router-dom'
import Loader from '../Loader'

import "react-multi-carousel/lib/styles.css"
import './RecentFeed.css'

import { recentData } from '../../store/recentFeedMock'
const RecentCard = lazy(() => import('./RecentCard'))

const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1280, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

const RecentFeed = () => {
    return(
        <div>
            <div className='FeedText'>
            Upcoming Event
            </div>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                arrows={false}
                responsive={responsive}
                focusOnSelect={true}
                itemClass="Item"
              >
                {
                    recentData.map(data => (
                        <Link to={{
                          pathname: data.path,}}
                          key={data.name}>
                            <Suspense fallback={<Loader/>}>
                              <RecentCard title={data.name} src={data.img} alt={data.imgAlt}/>
                            </Suspense>
                        </Link>
                    ))
                } 
            </Carousel>    
            
        </div>
        
    );
}

export default RecentFeed;