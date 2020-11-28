import React, { Fragment } from "react";
import Login from "../components/Login"
import ProfilePage from "../components/ProfilePage"

import { AuthContext } from '../store/AuthContext'
const Profile = () => {
  const { loggedIn } = React.useContext(AuthContext)
  return (
   <Fragment> 
    {
      loggedIn ? (
        <ProfilePage />   
      ) : (
        <Login />
      )
    }
    </Fragment>
  )
}

export default Profile