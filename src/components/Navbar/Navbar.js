import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div>
      <nav className={`navbar ${mobileMenu ? "active" : ""}`}>
        <div className="title-container">
          <NavLink
            to="/"
            className="main-title"
            onClick={() => setMobileMenu(false)}
          >
            Simply Quiz
          </NavLink>

          <div
            className={`mobile-toggle ${mobileMenu ? "active" : ""}`}
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
            <NavLink
              to="/"
              className={`${({ isActive }) => isActive && "active"}>`}
            >
              Home
            </NavLink>
          </li>

          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <NavLink
              to="/add+questions"
              className={`${({ isActive }) => isActive && "active"}`}
            >
              Add Questions
            </NavLink>
          </li>

          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <NavLink
              to="/quiz+page"
              className={`${({ isActive }) => isActive && "active"}`}
            >
              Quiz Page
            </NavLink>
          </li>

          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <NavLink
              to="/quiz+result"
              className={`${({ isActive }) => isActive && "active"}`}
            >
              Quiz Result
            </NavLink>
          </li>

          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <NavLink
              to="/settings"
              className={`${({ isActive }) => isActive && "active"}`}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
