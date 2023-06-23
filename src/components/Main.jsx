import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isMobile, isTablet } from "react-device-detect";
import MarePortfolioTItle from "../images/MarePortfolioTitle.jpg";
import TeaPortfolioTitle from "../images/TeaPortfolioTitle.jpg";
import LoresiPortfolioTile from "../images/LoresiPortfolioTitle.jpg";
import { openPortfolioPictures } from "../store/portfolioSlice";

export default function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleOpenPictures(e) {
    e.target.alt === "Mare" ? navigate("/mare3D") : "";
    e.target.alt === "Tea" ? navigate("/tea3D") : "";
    e.target.alt === "Loresi" ? navigate("/loresi3D") : "";
    if (isMobile || isTablet) {
      e.target.alt === "Mare"
        ? dispatch(openPortfolioPictures(e.target.alt))
        : "";
      e.target.alt === "Loresi"
        ? dispatch(openPortfolioPictures(e.target.alt))
        : "";
      e.target.alt === "Tea"
        ? dispatch(openPortfolioPictures(e.target.alt))
        : "";
    }
  }
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Портфолио</h1>
      <div className="portfolio__container">
        <img
          className="portfolio__image"
          src={MarePortfolioTItle}
          alt="Mare"
          onClick={handleOpenPictures}
        />
        <img
          className="portfolio__image"
          src={TeaPortfolioTitle}
          alt="Tea"
          onClick={handleOpenPictures}
        />
        <img
          className="portfolio__image"
          src={LoresiPortfolioTile}
          alt="Loresi"
          onClick={handleOpenPictures}
        />
      </div>
    </section>
  );
}
