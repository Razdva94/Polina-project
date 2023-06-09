import React from "react";
import { useDispatch } from "react-redux";
import seaPicture from "../images/sea.jpg";
import forest from "../images/forest.jpg";
import sky from "../images/sky.jpg";
import { openPortfolioPictures } from "../store/portfolioSlice";

export default function Main() {
  const dispatch = useDispatch();
  function handleOpenPictures(e) {
    dispatch(openPortfolioPictures(e.target.alt));
  }
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Портфолио</h1>
      <div className="portfolio__container">
        <figure className="portfolio__element">
          <img
            className="portfolio__image"
            src={seaPicture}
            alt="Loresi"
            onClick={handleOpenPictures}
          />
          <figcaption>sea</figcaption>
        </figure>
        <figure className="portfolio__element">
          <img
            className="portfolio__image"
            src={sky}
            alt="Mare"
            onClick={handleOpenPictures}
          />
          <figcaption>sky</figcaption>
        </figure>
        <figure className="portfolio__element">
          <img
            className="portfolio__image"
            src={forest}
            alt="Photographer"
            onClick={handleOpenPictures}
          />
          <figcaption>forest</figcaption>
        </figure>
      </div>
    </section>
  );
}
