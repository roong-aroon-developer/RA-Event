import React from 'react'
import './LoginFrame.css'
import RedirectHome from './Redirect'

const LoginFrame = () => {
    return(
        <div id="loginframe">
            <div id="field-wrapper">
            <input type="text" className = "inputbox" id="username" placeholder="username..."/>
            <input type="password" className = "inputbox" id="password" placeholder="password..."/>
            </div>
            <button className="submitcircle" onClick={RedirectHome()}>{/*<img src="./pics/SubmitArrow.png" alt="white arrow" width="29px" id="submitarrow"/>*/}Submit</button>
        </div>
    );
}

export default LoginFrame;