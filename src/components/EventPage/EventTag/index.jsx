import React, { Fragment } from 'react'
import './EventTag.css'

const EventTag = (props) => {
    return(
        <Fragment>
            {props.tag.map(data=> {
                return (
                    <div className='TagBubble'>
                    {"#".concat(data)}
                    </div>
                )
            })}
        </Fragment>
    );
}

export default EventTag;