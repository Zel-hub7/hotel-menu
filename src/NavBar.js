import "./NavBar.css";
import React, { useState } from "react";
import { MdCategory } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import logo from './img/logo.png'

const NavBar = ({ onCategoryChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    setMenuOpen(false); // Close the menu when a category is selected
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          <img id="logo" src={logo} alt="White House Hotel"/>
        </a>
        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-items">
            <li>
              <h4 onClick={() => handleCategoryClick("Salad")}>Salad</h4>
            </li>
            <li>
            <h4 onClick={() => handleCategoryClick("Juice")}>Juice</h4>
            </li>

            <li>
            <h4 onClick={() => handleCategoryClick("Lunch")}>Lunch</h4>
            </li>

            <li>
            <h4  onClick={() => handleCategoryClick("Pizza")}>Pizza</h4>
            </li>

            <li>
            <h4 onClick={() => handleCategoryClick("Fish")}>Fish</h4>
            </li>

            <li>
            <h4 onClick={() => handleCategoryClick("Breakfast")}>Breakfast</h4>
            </li>

            <li>
            <h4 onClick={() => handleCategoryClick("LocalBreakfast")}>LocalBreakfast</h4>
            </li>
        
          </ul>
        </div>
        <button
          className={`navbar-burger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu-icon">
            {menuOpen ? <ImCross className="cancel" /> : <MdCategory className="hum" />}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
