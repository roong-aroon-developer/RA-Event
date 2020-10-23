import React from 'react'
import './Header.css'

const Header = () => {
    return(
        <div id = "GreetBox">
            <div id ="Welcome"> 
                Morning, User
            </div>
            <div id = "subWelcome">
                Here's your event feed
            </div>
            <div id="Line" />
            <div id = "CircleBox">
                <div id = "InfoCircle">
                
                </div>
            </div>
        </div>
    );
}

export default Header;