import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="title-container">
          <Link
            to="/"
            className="main-title"
            onClick={() => setMobileMenu(false)}
          >
            Simply Quiz
          </Link>
          <div
            className="mobile-toggle"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        <ul className={`nav-container ${mobileMenu && "active"}`}>
          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <Link to="/add+questions">Add Questions</Link>
          </li>
          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <Link to="/quiz+page">Quiz Page</Link>
          </li>
          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <Link to="/quiz+result">Quiz Result</Link>
          </li>
          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
