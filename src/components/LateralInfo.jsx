import React from "react";
import { useDispatch, useSelector } from "react-redux";
import stripe from "../images/stripe.png";
import Slide from "./Slide";
import { toggleSlide } from "../store/slideSlice";
import instagram from "../images/i.webp";

function LateralInfo() {
  const dispatch = useDispatch();
  const slideState = useSelector((state) => state.slide.slide);
  function manageSlide() {
    dispatch(toggleSlide());
  }
  return (
    <>
      <div className="lateral-info"></div>
      <div className="lateral-info_type_fixed">
        <div className="lateral-info__text">Maisheva Polina</div>
        <button
          type="button"
          className="lateral-info__button"
          onClick={manageSlide}
        >
          {!slideState && (
            <>
              <img className="lateral-info__stripe" src={stripe} alt="stripe" />
              <img className="lateral-info__stripe" src={stripe} alt="stripe" />
              <img className="lateral-info__stripe" src={stripe} alt="stripe" />
            </>
          )}
          {slideState && <div className="lateral-info__cross"></div>}
        </button>
        <div className="lateral-info__icon-container">
          <img
            className="footer__icon"
            src="https://static.tildacdn.com/tild3839-3138-4438-a236-393266363134/Telegram.svg"
            alt="Telegram"
          />
          <img
            className="footer__icon"
            src="https://static.tildacdn.com/tild3762-3435-4265-a332-346633363037/behance.svg"
            alt="Behance"
          />
          <img
            className="footer__icon"
            src="https://static.tildacdn.com/tild6339-6532-4134-a334-393163396338/WhatsApp.svg"
            alt="Whatsapp"
          />
          <img
            className="footer__icon footer__icon_type_instagram"
            src={instagram}
            alt="instagram"
          />
        </div>
      </div>
      <Slide />
    </>
  );
}

export default LateralInfo;
