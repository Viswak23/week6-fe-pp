import React, { useState } from "react";
import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { signup, email, setEmail, password, setPassword } =
    useSignup(setIsAuthenticated); // Use the signup hook

  const handleSignup = async () => {
    await signup(email, password); // Trigger the signup
  };
  const emailType = useField("email");
  const passwordType = useField("password");

  return (
    <div>
      <h2>Signup</h2>
      Email:
      <input {...emailType} />
      Password:
      <input {...passwordType} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupComponent;
