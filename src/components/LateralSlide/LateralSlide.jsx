import React from "react";
import "./LateralSlide.css";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import cross from "../../images/cross.png";
import { toggleSlide } from "../../store/slideSlice";

function LateralSlide() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const onNavigateMain = () => {
    navigate("/");
    dispatch(toggleSlide());
  };
  const onNavigatePrices = () => {
    navigate("/prices");
    dispatch(toggleSlide());
  };
  const onNavigateAboutMe = () => {
    navigate("/about-me");
    dispatch(toggleSlide());
  };
  const onNavigateMakeAnOrder = () => {
    navigate("/make-an-order");
    dispatch(toggleSlide());
  };

  const onSlideClose = () => {
    dispatch(toggleSlide());
  };
  return (
    <div className="lateral-slide-container">
      <nav className="lateral-slide">
        <img
          src={cross}
          alt="закрыть"
          className="lateral-slide__cross"
          onClick={onSlideClose}
        />
        <a
          className={`lateral-slide__text lateral-slide__text_margin ${location.pathname === "/" && "lateral-slide__text_active"}`}
          onClick={onNavigateMain}
          href="#main"
        >
          Главная
        </a>
        <a
          className={`lateral-slide__text lateral-slide__text_margin ${
            location.pathname === "/prices" && "lateral-slide__text_active"
          }`}
          onClick={onNavigatePrices}
          href="#prices"
        >
          Cтоимость услуг
        </a>
        <p
          className={`lateral-slide__text lateral-slide__text_margin ${
            location.pathname === "/about-me" &&
            "lateral-slide__text_active"
          }`}
          onClick={onNavigateAboutMe}
        >
          Обо мне
        </p>
        <p
          className={`lateral-slide__text lateral-slide__text_margin ${
            location.pathname === "/make-an-order" &&
            "lateral-slide__text_active"
          }`}
          onClick={onNavigateMakeAnOrder}
        >
          Сделать заказ
        </p>
      </nav>
    </div>
  );
}

export default LateralSlide;
