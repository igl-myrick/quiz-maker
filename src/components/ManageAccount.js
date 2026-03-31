import React from "react";

function ManageAccount(props) {
  const { showRegister, showLogin, showHistory } = props;

  return (
    <React.Fragment>
      <h4>Manage Account</h4>
      <button type="button" onClick={showLogin}>Login</button>
      <button type="button" onClick={showRegister}>Register</button>
      <button type="button" onClick={showHistory}>Quiz History</button>
    </React.Fragment>
  );
}

export default ManageAccount;