import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSlide, closeSlide } from "../store/slideSlice";

function Slide() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startAnimation, setStartAnimation] = React.useState(true);
  const [textAppearDelay, setTextAppearDelay] = React.useState({
    portfolio: true,
    price: true,
    aboutMe: true,
    order: true
  });
  const isOpened = useSelector((state) => state.slide.slide);
  const slideRef = useRef(null);

  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth <= 1024);
    }
    console.log(isWideScreen);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Уберите зависимость isWideScreen

  useEffect(() => {
    const delay = 500;
    const timeoutId = setTimeout(() => {
      setStartAnimation(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isOpened) {
      const delay1 = 500;
      const delay2 = 1000;
      const delay3 = 1500;
      const delay4 = 2000;

      const timeoutId1 = setTimeout(() => {
        setTextAppearDelay((prevState) => ({
          ...prevState,
          portfolio: false,
        }));
      }, delay1);

      const timeoutId2 = setTimeout(() => {
        setTextAppearDelay((prevState) => ({
          ...prevState,
          price: false,
        }));
      }, delay2);

      const timeoutId3 = setTimeout(() => {
        setTextAppearDelay((prevState) => ({
          ...prevState,
          aboutMe: false,
        }));
      }, delay3);
      const timeoutId4 = setTimeout(() => {
        setTextAppearDelay((prevState) => ({
          ...prevState,
          order: false,
        }));
      }, delay4);

      return () => {
        clearTimeout(timeoutId1);
        clearTimeout(timeoutId2);
        clearTimeout(timeoutId3);
        clearTimeout(timeoutId4);
      };
    }
    setTextAppearDelay({
      portfolio: true,
      price: true,
      aboutMe: true,
      order: true,
    });
  }, [isOpened]);

  function handleNavigate() {
    navigate("/Polina-project");
    dispatch(toggleSlide());
  }

  function handleClickOutside(event) {
    if (
      !slideRef.current.contains(event.target) &&
      event.target.className !== "lateral-info__button"
    ) {
      dispatch(closeSlide());
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      dispatch(closeSlide());
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={slideRef}
      className={`${startAnimation && "slide"} ${
        isOpened ? "slide_opened" : "slide_closed"
      }`}
    >
      <h2
        onClick={handleNavigate}
        className={`${textAppearDelay.portfolio && "slide"} ${
          !textAppearDelay.portfolio && "slide__text"
        } slide__text_type_animated`}
      >
        ПОРТФОЛИО
      </h2>
      <h2
        className={`${textAppearDelay.price && "slide"} ${
          !textAppearDelay.price && "slide__text"
        } slide__text_type_animated`}
      >
        ЦЕНЫ
      </h2>
      <h2
        onClick={handleNavigate}
        className={`${textAppearDelay.aboutMe && "slide"} ${
          !textAppearDelay.aboutMe && "slide__text"
        } slide__text_type_animated`}
      >
        ОБО МНЕ
      </h2>
      {isWideScreen && (
        <h2
          onClick={handleNavigate}
          className={`${textAppearDelay.order && "slide"} ${
            !textAppearDelay.order && "slide__text"
          } slide__text_type_animated`}
        >
          СДЕЛАТЬ ЗАКАЗ
        </h2>
      )}
    </div>
  );
}

export default Slide;
