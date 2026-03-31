import React, { useState } from "react";
import ManageAccount from "./ManageAccount.js";
import Register from "./Register.js";
import Login from "./Login.js";
import UserHistory from "./UserHistory.js";

function AccountControl() {
  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);

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
  } else {
    currentlyVisibleState = 
      <ManageAccount
        showRegister={showRegister}
        showLogin={showLogin}
        showHistory={showHistory}
      />;
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default AccountControl;