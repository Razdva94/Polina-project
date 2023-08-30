import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isMobile, isTablet } from "react-device-detect";
import MarePortfolioTItle from "../images/Mare/MarePortfolioTitle_17_11zon.webp";
import TeaPortfolioTitle from "../images/Tea/TeaPortfolioTitle_29_11zon.webp";
import LoresiPortfolioTitle from "../images/Loresi/LoresiPortfolioTitle.webp";
import { openPortfolioPictures } from "../store/portfolioSlice";

export default function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleOpenPictures(e) {
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
    } else {
      e.target.alt === "Mare" ? navigate("/mare3D") : "";
      e.target.alt === "Tea" ? navigate("/tea3D") : "";
      e.target.alt === "Loresi" ? navigate("/loresi3D") : "";
    }
  }
  return (
    <section className="portfolio">
      <h2 className="portfolio__title" id="portfolio">
        Портфолио
      </h2>
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
          src={LoresiPortfolioTitle}
          alt="Loresi"
          onClick={handleOpenPictures}
        />
      </div>
    </section>
  );
}
