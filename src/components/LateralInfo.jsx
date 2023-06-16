/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import stripe from "../images/stripe.png";
import { toggleSlide, closeSlide } from "../store/slideSlice";
import { defineDisplayWithSlide } from "../spare_components/mobileSlideSlice";
import instagram from "../images/i.webp";
import Slide from "./Slide";
import HorizontalSlide from "./HorizontalSlide";

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
    console.log(slideState);
  }

  function navigatetoMain() {
    navigate("/");
  }
  return (
    <>
      <div className="lateral-info">
        <div className="lateral-info__text" onClick={navigatetoMain}>
          Maisheva Polina
        </div>
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
              className="footer__icon"
              src="https://static.tildacdn.com/tild3839-3138-4438-a236-393266363134/Telegram.svg"
              alt="Telegram"
            />
          </a>
          <a
            href="https://www.behance.net/polinaadesign"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon"
              src="https://static.tildacdn.com/tild3762-3435-4265-a332-346633363037/behance.svg"
              alt="Behance"
            />
          </a>
          <a href="https://wa.me/+79819412392" target="_blank" rel="noreferrer">
            <img
              className="footer__icon"
              src="https://static.tildacdn.com/tild6339-6532-4134-a334-393163396338/WhatsApp.svg"
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
      {displayWithState && slideState && <HorizontalSlide />}
    </>
  );
}

export default LateralInfo;
