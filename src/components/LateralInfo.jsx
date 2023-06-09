import React from "react";
import { useDispatch, useSelector } from "react-redux";
import stripe from "../images/stripe.png";
import Slide from "./Slide";
import { toggleSlide } from "../store/slideSlice";

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
      </div>
      <Slide />
    </>
  );
}

export default LateralInfo;
