import React from "react";
import seaPicture from "../images/sea.jpg";
import forest from "../images/forest.jpg";
import sky from "../images/sky.jpg";

export default function Main() {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Портфолио</h1>
      <div className="portfolio__container">
        <figure className="portfolio__element">
          <img className="portfolio__image" src={seaPicture} alt="sea" />
          <figcaption>sea</figcaption>
        </figure>
        <figure className="portfolio__element">
          <img className="portfolio__image" src={sky} alt="sky" />
          <figcaption>sky</figcaption>
        </figure>
        <figure className="portfolio__element">
          <img className="portfolio__image" src={forest} alt="forest" />
          <figcaption>forest</figcaption>
        </figure>
      </div>
    </section>
  );
}
