import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = ( setIsAuthenticated ) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (email, password) => {
      try {
        const response = await fetch("/api/users/login", {
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
    return {handleLogin, email, setEmail, password, setPassword};

};

export default useLogin;