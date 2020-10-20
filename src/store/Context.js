import React, { useState } from "react";

export const AuthContext = React.createContext({
  loggedIn: false,
  userInfo: {
    name: "",
    uid: "",
    email: "",
    phone: "",
    img: "",
  },
});

export const Store = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    uid: "",
    email: "",
    phone: "",
    img: "",
  });
  const checkAuth = (e) => {
      setLoggedIn(e)
  }

  const checkUserInfo = (e) => {
    setUserInfo({
        name: e.name,
        uid: e.uid,
        email: e.email,
        phone: e.phone,
        img: e.img
    })
  }

  return (
      <AuthContext.Provider
        value={{
            loggedIn,
            userInfo,
            checkAuth,
            checkUserInfo
        }}>
          {props.children}
      </AuthContext.Provider>
  )
};
