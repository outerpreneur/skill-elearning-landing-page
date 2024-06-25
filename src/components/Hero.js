import React from "react";
import imageHero from "../assets/image-hero-desktop.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1>Maximize skill, minimize budget</h1>

        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>

        <button className="hero__container--button">Get Started</button>
      </div>
      <img src={imageHero} alt="hero" />
    </section>
  );
}
