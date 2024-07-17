import React from "react";
import lightLogo from "../assets/logo-light.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container page-width">
        <img src={lightLogo} alt="logo" className="footer__logo" />
        <button className="footer__button">Get Started</button>
      </div>
    </footer>
  );
}
