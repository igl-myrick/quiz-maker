import React, { useState, useEffect } from "react";
import Register from "./Register.js";
import Login from "./Login.js";
import UserHistory from "./UserHistory.js";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function AccountControl() {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);
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

  const showRegister = () => {
    setRegisterVisible(true);
  }

  const hideRegister = () => {
    setRegisterVisible(false);
  }

  const showLogin = () => {
    setLoginVisible(true);
  }

  const hideLogin = () => {
    setLoginVisible(false);
  }

  const showHistory = () => {
    setHistoryVisible(true);
  }

  const hideHistory = () => {
    setHistoryVisible(false);
  }

  let currentlyVisibleState = null;

  if (registerVisible) {
    currentlyVisibleState = <Register hideRegister={hideRegister}/>;
  } else if (loginVisible) {
    currentlyVisibleState = <Login hideLogin={hideLogin}/>;
  } else if (historyVisible) {
    currentlyVisibleState = <UserHistory hideHistory={hideHistory}/>;
  } else if (authUser) {
    <div>
      <h4>Manage Accounts</h4>
      <p>Welcome Back, {authUser.email}</p>
      <button type="button" onClick={userLogOut}>Log Out</button>
    </div>
  } else {
    currentlyVisibleState = 
      <div>
        <h4>Manage Account</h4>
        <button type="button" onClick={showLogin}>Login</button>
        <button type="button" onClick={showRegister}>Register</button>
        <button type="button" onClick={showHistory}>Quiz History</button>
      </div>
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default AccountControl;