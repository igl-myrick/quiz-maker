import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";

function RegisterForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const registerUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => props.hideRegisterForm())
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
      <div id="register-container">
        <h4>Register</h4>
        <form onSubmit={registerUser}>
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
          <button type="submit">Register</button>
        </form>
        {currentlyVisibleState}

        <button type="button" onClick={props.hideRegisterForm}>Back to Accounts</button>
      </div>
    </React.Fragment>
  );
}

RegisterForm.propTypes = {
  hideRegisterForm: PropTypes.func
}

export default RegisterForm;