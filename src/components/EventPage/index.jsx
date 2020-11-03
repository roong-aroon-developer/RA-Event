import React, { Fragment } from 'react'
import EventImage from './EventImage'
import EventTag from './EventTag'
import EventContent from './EventContent'

const EventPage = (props) => {
    return(
        <Fragment>
            <EventImage src={props.src} alt={props.alt}/>
            <EventTag tags={props.tags}/>
            <EventContent title={props.title} body={props.body}/>
        </Fragment>
    )
}

export default EventPage