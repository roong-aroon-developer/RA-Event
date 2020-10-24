import React from "react";
import { Fragment } from "react"
import "./LoginField.css";

const LoginField = (props) => {
  return (
    <Fragment>
      <div id="logintext">
        <div id="loginword">Login</div>
        <div id="loginsubtext">with student ID</div>
      </div>
      <div id="loginframe">
        {props.children}
      </div>
    </Fragment>
  );
};

export default LoginField;
