import React, { Fragment } from 'react'
import EventImage from './EventImage'
import EventTag from './EventTag'
import EventContent from './EventContent'

const EventPage = (props) => {
    return(
        <Fragment>
            <EventImage/>
            <EventTag/>
            <EventContent />
        </Fragment>
    )
}

export default EventPage