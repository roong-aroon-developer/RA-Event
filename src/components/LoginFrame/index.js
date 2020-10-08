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
            <button className="submitcircle" ><NavLink to="/profile" style={{textDecoration: "none"}}>Submit</NavLink></button>
        </div>
    );
}

export default LoginFrame;