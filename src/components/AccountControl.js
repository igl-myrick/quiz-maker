import React, { useState, useEffect } from "react";
import RegisterForm from "./RegisterForm.js";
import LoginForm from "./LoginForm.js";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function AccountControl() {
  const [registerFormVisible, setRegisterFormVisible] = useState(false);
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    }
  }, []);

  const userLogOut = () => {
    signOut(auth);
  }

  const showRegisterForm = () => {
    setRegisterFormVisible(true);
  }

  const hideRegisterForm = () => {
    setRegisterFormVisible(false);
  }

  const showLoginForm = () => {
    setLoginFormVisible(true);
  }

  const hideLoginForm = () => {
    setLoginFormVisible(false);
  }

  let currentlyVisibleState = null;

  if (registerFormVisible) {
    currentlyVisibleState = <RegisterForm hideRegisterForm={hideRegisterForm}/>;
  } else if (loginFormVisible) {
    currentlyVisibleState = <LoginForm hideLoginForm={hideLoginForm}/>;
  } else if (authUser) {
    currentlyVisibleState =
      <div>
        <h4>Manage Accounts</h4>
        <p>Welcome Back, {authUser.email}</p>
        <button type="button" onClick={userLogOut}>Log Out</button>
      </div>
  } else {
    currentlyVisibleState = 
      <div>
        <h4>Manage Account</h4>
        <button type="button" onClick={showLoginForm}>Login</button>
        <button type="button" onClick={showRegisterForm}>Register</button>
      </div>
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default AccountControl;