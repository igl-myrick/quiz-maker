import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const logUserIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => props.hideLoginForm())
      .catch((error) => {
        setError(error);
      });
  }

  let currentlyVisibleState = null;

  if (error) {
    currentlyVisibleState = <p>There was an error: {error.message}</p>
  }

  return (
    <React.Fragment>
      <div id="login-container">
        <h4>Log in</h4>
        <form onSubmit={logUserIn}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}/>
          <button type="submit">Log in</button>
        </form>
        {currentlyVisibleState}
        
        <button type="button" onClick={props.hideLoginForm}>Back to Accounts</button>
      </div>
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  hideLoginForm: PropTypes.func
}

export default LoginForm;