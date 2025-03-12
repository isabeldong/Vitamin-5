import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import NotHome from "./pages/NotHome/NotHome";

function App() {
  return (
    <div>
      <Navbar />  {/* The Navbar appears on every page */}
      
      <Routes>
        <Route path="/" element={<h1>My Website Yay!</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/not-home" element={<NotHome />} />
      </Routes>
    </div>
  );
}

export default App;
