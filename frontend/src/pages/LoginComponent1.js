import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const emailType = useField("email");
  const passwordType = useField("password");
  const email = emailType.value;
  const password = passwordType.value;
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        email:
        <input {...emailType} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordType} />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
