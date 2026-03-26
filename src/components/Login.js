import React, { useState } from "react";
import { auth } from "./../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logUserIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
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
      </div>
    </React.Fragment>
  );
}

export default Login;