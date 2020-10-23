import React from "react";
import { Fragment } from "react"
import "./LoginField.css";

const LoginField = () => {
  return (
    <Fragment>
      <div id="logintext">
        <div id="loginword">Login</div>
        <div id="loginsubtext">with student ID</div>
      </div>
      <div id="loginframe">
        <div id="field-wrapper">
          <input
            type="text"
            className="inputbox"
            id="username"
            placeholder="username..."
          />
          <input
            type="password"
            className="inputbox"
            id="password"
            placeholder="password..."
          />
        </div>
      </div>
    </Fragment>
  );
};

export default LoginField;
