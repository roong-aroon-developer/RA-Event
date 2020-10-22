import React from 'react'
import { Link } from 'react-router-dom'
import './EventTemplate.css'

const EventTemplate = () => {
    return(
        <div className="TemplatePage" >
            <div className = 'placeholder' >
                <Link to='/'>
                    <div className="Back">
                        b
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default EventTemplate;