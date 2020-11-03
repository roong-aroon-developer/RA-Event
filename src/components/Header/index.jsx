import React from 'react';
import './Header.css';

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
                    <img src={ require('../../static/mask-01.png')} alt='mask' id='aqi'/>
                    <img src={require('../../static/weather-icon.png')} alt='weather-cloud' id='weather'/>
                    <div id='aqi-number'>xx aqi</div>
                    <div id='temperature'>x°c</div>
                </div>
            </div>
        </div>
    );
}

export default Header;