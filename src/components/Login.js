import React, { useState } from "react";
import { auth } from "./../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logUserIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
    props.hideLogin();
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
        
        <button type="button" onClick={props.hideLogin}>Back to Accounts</button>
      </div>
    </React.Fragment>
  );
}

export default Login;