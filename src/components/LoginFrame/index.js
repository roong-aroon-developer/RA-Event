import { render } from '@testing-library/react'
import React from 'react'
import './LoginFrame.css'

const LoginFrame = () => {
    return(
        <div id="loginframe">
            <input type="text" class = "inputbox" id="username" placeholder="username..."/>
            <input type="password" class = "inputbox" id="password" placeholder="password..."/>
            <button id="submitcircle"><img src="./pics/SubmitArrow.png" alt="white arrow" width="29px" id="submitarrow"/></button>
        </div>
    );
}

export default LoginFrame;