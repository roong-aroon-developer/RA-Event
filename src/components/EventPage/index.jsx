import React, { Fragment } from 'react'
import EventImage from './EventImage'
import EventTag from './EventTag'
import EventContent from './EventContent'

const EventPage = (props) => {
    return(
        <Fragment>
            <EventImage src={props.src} alt={props.alt}/>
            <EventTag tag={props.tag}/>
            <EventContent title={props.title} body={props.body}/>
        </Fragment>
    )
}

export default EventPage