import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import SignupComponent from "./pages/SignupComponent1";
import LoginComponent from "./pages/LoginComponent1";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );
  return (
    <>
      <BrowserRouter>
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/signup" />}
            />
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <LoginComponent setIsAuthenticated={setIsAuthenticated} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/signup"
              element={
                !isAuthenticated ? (
                  <SignupComponent setIsAuthenticated={setIsAuthenticated} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
