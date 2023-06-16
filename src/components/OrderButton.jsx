import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSlide } from "../store/slideSlice";

function OrderButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/make-an-order");
    dispatch(closeSlide());
  }
  return (
    <button type="button" className="order-button" onClick={handleNavigate}>
      Оставить заявку
    </button>
  );
}

export default OrderButton;