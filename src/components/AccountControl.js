import React from "react";
import Register from "./Register.js";
import Login from "./Login.js";

function AccountControl() {
  let currentlyVisibleState = null;

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default AccountControl;