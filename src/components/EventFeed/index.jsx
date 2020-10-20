import React, { Fragment } from 'react'
import Carousel from 'react-multi-carousel'
import { Link, Route, BrowserRouter, Switch  } from 'react-router-dom'

import "react-multi-carousel/lib/styles.css"
import './EventFeed.css'

import { EventData } from '../../store/EventFeedMock'
import EventInfo from './EventInfo'

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

const EventFeed = () => {
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
                containerClass='pb-8' 
              >
                {
                    EventData.map(data => (
                        <Link to={{
                          pathname: data.path,}}>
                            <EventInfo />
                        </Link>
                    ))
                } 
            </Carousel>    
            
        </div>
        
    );
}

export default EventFeed;