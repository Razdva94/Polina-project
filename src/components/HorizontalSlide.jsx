/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

function HorizontalSlide() {
  const navigate = useNavigate();
  function goToPortfolio() {
    navigate("/");
  }
  function goToOrder() {
    navigate("/make-an-order");
  }
  function goToPrices() {
    navigate("/prices");
  }
  function goToAboutMe() {
    navigate("/about-me");
  }
  return (
    <div className="horizontal-slide">
      <nav className="horizontal-slide__navigation">
        <a href="#main" className="horizontal-slide__text" onClick={goToPortfolio}>
          ГЛАВНАЯ
        </a>
        <a href="#prices" className="horizontal-slide__text" onClick={goToPrices}>ЦЕНЫ</a>
        <a href="about-me" className="horizontal-slide__text" onClick={goToAboutMe}>ОБО МНЕ</a>
        <a href="make-an-order" className="horizontal-slide__text" onClick={goToOrder}>
          ОСТАВИТЬ ЗАЯВКУ
        </a>
      </nav>
    </div>
  );
}

export default HorizontalSlide;
