import React, { Fragment } from 'react'
import EventImage from './EventImage'
import EventTag from './EventTag'

const EventPage = (props) => {
    return(
        <Fragment>
            <EventImage/>
            <EventTag/>
        </Fragment>
    )
}

export default EventPage