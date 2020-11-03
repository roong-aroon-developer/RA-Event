import React from 'react'
import Carousel from 'react-multi-carousel'
import { Link } from 'react-router-dom'

import "react-multi-carousel/lib/styles.css"
import './RecentFeed.css'

import { EventData } from '../../store/EventFeedMock'
import RecentCard from './RecentCard'

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
                    EventData.map(data => (
                        <Link to={{
                          pathname: data.path,}}
                          key={data.name}>
                            <RecentCard title={data.name} />
                        </Link>
                    ))
                } 
            </Carousel>    
            
        </div>
        
    );
}

export default RecentFeed;