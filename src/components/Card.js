import React from "react";
import data from "../data.json";
import animationIcon from "../assets/icon-animation.svg";
import businessIcon from "../assets/icon-business.svg";
import cryptoIcon from "../assets/icon-crypto.svg";
import photographyIcon from "../assets/icon-photography.svg";
import designIcon from "../assets/icon-design.svg";

const icons = {
  animation: animationIcon,
  business: businessIcon,
  crypto: cryptoIcon,
  photography: photographyIcon,
  design: designIcon,
};

export default function Card() {
  console.log(icons);
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className={`card ${item.backgroundColor} ${item.color}`}
        >
          <img src={icons[item.image]} alt="card" className="card__image" />
          <h2 className="card__ctatitle">{item.ctaTitle}</h2>
          <h3 className="card__title">{item.title}</h3>
          <p className="card__description">{item.description}</p>
          <a href="#" className="card__link">
            <p>{item.cta}</p>
          </a>
        </div>
      ))}
    </>
  );
}
