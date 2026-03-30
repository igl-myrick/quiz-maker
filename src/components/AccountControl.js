import React, { useState } from "react";
import ManageAccount from "./ManageAccount.js";
import Register from "./Register.js";
import Login from "./Login.js";
import UserHistory from "./UserHistory.js";

function AccountControl() {
  const [mainPageVisible, setMainPageVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);

  let currentlyVisibleState = null;

  if (registerVisible) {
    currentlyVisibleState = <Register/>;
  } else if (loginVisible) {
    currentlyVisibleState = <Login/>;
  } else if (historyVisible) {
    currentlyVisibleState = <UserHistory/>;
  } else {
    currentlyVisibleState = <ManageAccount/>;
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default AccountControl;