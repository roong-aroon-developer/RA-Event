import React, { Fragment } from 'react'
import './EventContent.css'

const EventContent = (props) =>{
    return(
        <Fragment>
            <div id ="PostContainer">
                <div id="Title">
                    {props.title}
                </div>
                <div id="PostContent">
                    {props.body}
                </div>
            </div>
        </Fragment>
    );
}

export default EventContent;