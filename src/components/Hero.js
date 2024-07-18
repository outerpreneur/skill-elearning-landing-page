import React from "react";
import imageHero from "../assets/image-hero-desktop.png";
import imageHeroMobile from "../assets/image-hero-mobile.png";
import imageHeroTablet from "../assets/image-hero-tablet.png";

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
        <picture>
          <source media="(max-width: 768px)" srcSet={imageHeroMobile} />
          <source media="(max-width: 1024px)" srcSet={imageHeroTablet} />
          <source media="(min-width: 1025px)" srcSet={imageHero} />
          <img src={imageHero} className="hero__image" alt="hero" />
        </picture>
      </div>
    </section>
  );
}
