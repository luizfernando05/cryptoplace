import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/cryptoplace-logo.svg";
import arrowUp from "../../assets/arrow-up-right.svg";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", Symbol: "$" });
        break;
      }
      case "brl": {
        setCurrency({ name: "brl", Symbol: "R$" });
        break;
      }
      default: {
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo from CryptoPlace" className="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
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
