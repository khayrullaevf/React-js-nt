import React from "react";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <h2>
        <a href="./index.html">Logo</a>
      </h2>
      <ul className={active}>
        <li className="nav__item">
          <a href="./index.html" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="./index.html" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="./index.html" className="nav__link">
            Blog
          </a>
        </li>
        <li className="nav__item">
          <a href="./index.html" className="nav__link">
            Contact
          </a>
        </li>
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
