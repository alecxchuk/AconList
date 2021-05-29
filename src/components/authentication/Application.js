import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../../providers/UserProvider";
import PasswordResetForm from "./PasswordResetForm";

export default function Application() {

  // Get the current value of user from UserContext.
  // We use this to know if a user is signed in & display the approipriate page
  const user = useContext(UserContext);

  return (
    user ?
      <ProfilePage />
    :
      <Router>
        <SignUp path="signUp" />
        <SignIn path="/" />
        <PasswordReset path = "passwordReset" />
      </Router>
  );
}
