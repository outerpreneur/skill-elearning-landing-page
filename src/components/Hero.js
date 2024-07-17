import React from "react";
import imageHero from "../assets/image-hero-desktop.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__column-1">
        <h1 className="hero__title">Maximize skill, minimize budget</h1>

        <p className="hero__text">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>

        <button className="hero__button">Get Started</button>
      </div>
      <div className="hero__column-2">
        <img src={imageHero} className="hero__image" alt="hero" />
      </div>
    </section>
  );
}
