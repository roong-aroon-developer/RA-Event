import React from "react";
import { Fragment } from "react"
import Logo from "../../../static/logo1.png"
import "./LoginField.css";

const LoginField = (props) => {
  return (
    <Fragment>
      <div id="logintext">
        <div id="loginword">Login</div>
        <div id="loginsubtext">with student email</div>
      </div>
      <div id="loginframe">
        {props.children}
      </div>
      <div id='logo-wrapper'>
        <img src={Logo} alt='logo' id='logo'/>
      </div>
    </Fragment>
  );
};

export default LoginField;
