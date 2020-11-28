import React, { useState } from "react";
import firebase from './Firebase'
require('firebase/auth')

export const AuthContext = React.createContext();

export const AuthStore = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    uid: "",
    email: "",
    phone: "",
    img: "",
  });
  
  React.useEffect(()=> {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        setLoggedIn(!!user)
        setUserInfo({
        name: firebase.auth().currentUser?.displayName,
        uid: firebase.auth().currentUser?.uid,
        email: firebase.auth().currentUser?.email,
        phone: firebase.auth().currentUser?.phoneNumber,
        img: firebase.auth().currentUser?.photoURL,
      });
    })
    return () => {
      unregisterAuthObserver();
    }
  }, []);

  return (
      <AuthContext.Provider
        value={{
            loggedIn,
            userInfo,
        }}>
          {props.children}
      </AuthContext.Provider>
  )
};
