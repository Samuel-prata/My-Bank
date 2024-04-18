import React from "react";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign-Up" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
