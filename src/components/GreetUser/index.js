import React from 'react'
import './GreetUser.css'

const GreetUser = () => {
    return(
        <div id = "GreetBox">
            <div id ="Welcome"> 
                Morning, User
            </div>
            <div id = "subWelcome">
                Here's your event feed
            </div>
            <div id="Line" />
            <div id = "InfoCircle">
                [Placeholder]
            </div>
        </div>
    );
}

export default GreetUser;