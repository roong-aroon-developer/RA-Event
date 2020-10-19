import React from 'react'
import { NavLink } from 'react-router-dom'
import './LoginFrame.css'

const LoginFrame = () => {
    return(
        <div id="loginframe">
            <div id="field-wrapper">
            <input type="text" className = "inputbox" id="username" placeholder="username..."/>
            <input type="password" className = "inputbox" id="password" placeholder="password..."/>
            </div>
            <NavLink to="/" style={{textDecoration: "none", color: "white"}}><div className="submitcircle">Submit</div></NavLink>
        </div>
    );
}

export default LoginFrame;