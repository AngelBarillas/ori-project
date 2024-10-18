import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link className="title" to="/">
        Ori Lashes
      </Link>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <label className="menuButton">
        <input
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          id="check"
          type="checkbox"
        />
        <span className="top"></span>
        <span className="mid"></span>
        <span className="bot"></span>
      </label>
    </nav>
  );
};

export default Navbar;
