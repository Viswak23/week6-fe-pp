import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { signup, email, setEmail, password, setPassword } =
    useSignup(setIsAuthenticated); // Use the signup hook

  const handleSignup = async () => {
    await signup(email, password); // Trigger the signup
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupComponent;
