import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./NavBar";
import Hero from "./Hero/Hero";
import { Home, About, Services, Contact, BookingPage } from "../pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookingpage" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
