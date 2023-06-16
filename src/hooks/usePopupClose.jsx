import React from "react";
import { useDispatch } from "react-redux";
import { closePortfolioPictures } from "../spare_components/portfolioSlice";

export default function usePopupClose(isOpened, closePopup) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!isOpened) return;

    const handleOverlay = (event) => {
      if (
        event.target.classList.contains("project_opened")
      ) {
        closePopup();
        dispatch(closePortfolioPictures());
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closePopup();
        dispatch(closePortfolioPictures());
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOverlay);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [isOpened, closePopup, dispatch]);
}
