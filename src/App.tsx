import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./features/auth/login";
import { Signup } from "./features/auth/signup";
import Home from "./features/dashboard/home";
import Temp from "./Temp/Temp";
import LandingPage from "./features/dashboard/landingPage";

function App() {
  return (
    <div className="App h-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </div>
  );
}

export default App;
