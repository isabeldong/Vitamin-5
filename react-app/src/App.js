import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NotHome from "./pages/NotHome/NotHome";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="center-content">
        <Routes>
          <Route path="/" element={<h1>My Website Yay!</h1>} />
          <Route path="/home" element={<Home />} />
          <Route path="/not-home" element={<NotHome />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
