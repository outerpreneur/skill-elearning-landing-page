import React from "react";
import darkLogo from "../assets/logo-dark.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={darkLogo} className="header__logo" alt="logo" />
      <button className="header__button">Get Started</button>
    </header>
  );
}
