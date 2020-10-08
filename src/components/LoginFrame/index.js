import React from 'react'
import './LoginFrame.css'

const LoginFrame = () => {
    return(
        <div id="loginframe">
            <div id="field-wrapper">
            <input type="text" className = "inputbox" id="username" placeholder="username..."/>
            <input type="password" className = "inputbox" id="password" placeholder="password..."/>
            </div>
            <button className="submitcircle"><img src="./pics/SubmitArrow.png" alt="white arrow" width="29px" id="submitarrow"/></button>
        </div>
    );
}

export default LoginFrame;