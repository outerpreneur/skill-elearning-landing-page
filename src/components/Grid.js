import React from "react";
import data from "../data.json";
import Card from "./Card";

export default function Grid() {
  console.log(data);
  // data.map((item) => console.log(item));
  return (
    <section className="grid-section">
      <div className="grid">
        <Card />
      </div>
    </section>
  );
}
