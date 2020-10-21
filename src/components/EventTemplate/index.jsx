import React from 'react'
import { Link } from 'react-router-dom'
import './EventTemplate.css'

const EventTemplate = () => {
    return(
        <div >
            <Link to='/'>
                <div className="Back">
                    Back
                </div>
            </Link>
        </div>
    )
}

export default EventTemplate;