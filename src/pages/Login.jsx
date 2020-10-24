import React from "react";
import LoginField from "../components/LoginField";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";
import firebase from "../store/Firebase";
import { AuthContext } from "../store/Context";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: { hd: "roong-aroon.ac.th" },
    },
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

const Login = () => {
  const { checkAuth, checkUserInfo } = React.useContext(AuthContext);
  React.useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        checkAuth(!user);
      });
    return () => {
      unregisterAuthObserver();
      checkUserInfo({
        name: firebase.auth().currentUser?.displayName,
        uid: firebase.auth().currentUser?.uid,
        email: firebase.auth().currentUser?.email,
        phone: firebase.auth().currentUser?.phoneNumber,
        img: firebase.auth().currentUser?.photoURL,
      });
    };
  }, [checkUserInfo, checkAuth]);

  return (
    <LoginField>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </LoginField>
  );
};

export default Login;
