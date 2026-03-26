import React, { useState } from "react";
import { auth } from "./../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
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
      </div>
    </React.Fragment>
  );
}

export default Register;