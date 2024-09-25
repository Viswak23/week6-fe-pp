import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  useLogin from "../hooks/useLogin"

const LoginComponent = ({ setIsAuthenticated }) => {
  const { handleLogin, email, setEmail, password, setPassword } =
    useLogin(setIsAuthenticated);

  const login = async () => {
    await handleLogin(email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={login}>Log In</button>
    </div>
  );
};

export default LoginComponent;
