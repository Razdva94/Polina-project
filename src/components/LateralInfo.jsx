/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import stripe from "../images/stripe.png";
import { toggleSlide, closeSlide } from "../store/slideSlice";
import { defineDisplayWithSlide } from "../store/mobileSlideSlice";
import instagram from "../images/i.webp";
import Slide from "./Slide";
// import HorizontalSlide from "./HorizontalSlide";
import Behance from "../images/Behance.png";
import Whatsapp from "../images/Whatsapp.png";
import Telegramm from "../images/Telegramm.png";
import LateralSlide from "./LateralSlide/LateralSlide";

function LateralInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const slideState = useSelector((state) => state.slide.slide);
  const displayWithState = useSelector(
    (state) => state.mobileSlide.displayState
  );

  useEffect(() => {
    function handleResize() {
      dispatch(defineDisplayWithSlide(window.innerWidth < 601));
    }
    window.addEventListener("resize", handleResize);
    dispatch(closeSlide());
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch, displayWithState]);

  function manageSlide() {
    dispatch(toggleSlide());
  }

  function navigatetoMain() {
    navigate("/");
  }
  return (
    <>
      <div className="lateral-info">
        <a style={{ textDecoration: "none" }} href="#main">
          <div className="lateral-info__text" onClick={navigatetoMain}>
            Maisheva Polina
          </div>
        </a>
        <button
          type="button"
          className="lateral-info__button"
          onClick={manageSlide}
        >
          {!slideState && (
            <>
              <img
                className="lateral-info__stripe"
                src={stripe}
                alt="stripe"
                onClick={(e) => {
                  e.stopPropagation();
                  manageSlide();
                }}
              />
              <img
                className="lateral-info__stripe"
                src={stripe}
                alt="stripe"
                onClick={(e) => {
                  e.stopPropagation();
                  manageSlide();
                }}
              />
              <img
                className="lateral-info__stripe"
                src={stripe}
                alt="stripe"
                onClick={(e) => {
                  e.stopPropagation();
                  manageSlide();
                }}
              />
            </>
          )}
          {slideState && (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div className="lateral-info__cross"></div>
          )}
        </button>
        <div className="lateral-info__icon-container">
          <a
            href="https://t.me/polinam_design"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon footer__icon_type_telegram"
              src={Telegramm}
              alt="Telegram"
            />
          </a>
          <a
            href="https://www.behance.net/polinaadesign"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon footer__icon_type_behance"
              src={Behance}
              alt="Behance"
            />
          </a>
          <a href="https://wa.me/+79819412392" target="_blank" rel="noreferrer">
            <img
              className="footer__icon footer__icon_type_watsapp"
              src={Whatsapp}
              alt="Whatsapp"
            />
          </a>
          <a
            href="https://www.instagram.com/polinam_design/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon footer__icon_type_instagram"
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
      </div>
      {!displayWithState && <Slide />}
      {displayWithState && slideState && <LateralSlide />}
    </>
  );
}

export default LateralInfo;
