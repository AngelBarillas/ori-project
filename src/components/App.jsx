import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./NavBar";
import { Home, About, Services, Contact } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
