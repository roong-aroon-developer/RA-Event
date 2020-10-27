import React from "react";
import LoginField from "./LoginField";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";
import firebase from "../../store/Firebase";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: { hd: "roong-aroon.ac.th" },
    },
  ],
  signInSuccessUrl: "http://localhost:3000/"
};

const Login = () => {

  return (
    <LoginField>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </LoginField>
  );
};

export default Login;
