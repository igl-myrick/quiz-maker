import React from "react";

function UserHistory(props) {
  return(
    <React.Fragment>
      <p>No history yet...</p>
      <button type="button" onClick={props.hideHistory}>Back to Accounts</button>
    </React.Fragment>
  );
}

export default UserHistory;