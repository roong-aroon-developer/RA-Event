import React from 'react'
import './EventTag.css'

const EventTag = (props) => {
    return(
        <div className='TagBubble'>
            {"#".concat(props.tags)}
        </div>
    );
}

export default EventTag;