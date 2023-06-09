import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { slideClose } from "../store/slideSlice";

function OrderButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/make-an-order");
    dispatch(slideClose());
  }
  return (
    <button type="button" className="order-button" onClick={handleNavigate}>
      OrderButton
    </button>
  );
}

export default OrderButton;
