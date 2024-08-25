import React from "react";
import "./Navbar.css";
import logo from "../../assets/cryptoplace-logo.svg";
import arrowUp from "../../assets/arrow-up-right.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo from CryptoPlace" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="brl">BRL</option>
        </select>
        <button>
          SignUp <img src={arrowUp} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
