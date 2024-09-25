import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useField from "../hooks/useField";
const SignupComponent = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const emailType = useField("email");
  const passwordType = useField("password");
  const email = emailType.value;
  const password = passwordType.value;

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed", response);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

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
