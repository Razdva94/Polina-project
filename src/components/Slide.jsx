import React, { useRef, useEffect } from "react";
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
    order: true,
  });
  const isOpened = useSelector((state) => state.slide.slide);
  const slideRef = useRef(null);

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
      const delay2 = 1500;
      const delay3 = 1000;
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

  function handleNavigateMain() {
    navigate("/");
    dispatch(toggleSlide());
  }

  function handleNavigateOrder() {
    navigate("/make-an-order");
    dispatch(toggleSlide());
  }

  function handleNavigatePrices() {
    navigate("/prices");
    dispatch(toggleSlide());
  }
  function handleNavigateAboutMe() {
    navigate("/about-me");
    dispatch(toggleSlide());
  }

  function handleClickOutside(event) {
    if (
      !slideRef.current?.contains(event.target) &&
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
    <nav
      ref={slideRef}
      className={`${startAnimation && "slide"} ${
        isOpened ? "slide_opened" : "slide_closed"
      }`}
    >
      <a
        onClick={handleNavigateMain}
        className={`${textAppearDelay.portfolio && "slide"} ${
          !textAppearDelay.portfolio && "slide__text"
        } slide__text_type_animated`}
        href="#main"
      >
        <h2 style={{ margin: 0, all: "unset", fontSize: "20px" }}>ГЛАВНАЯ</h2>
      </a>
      <a
        onClick={handleNavigateAboutMe}
        className={`${textAppearDelay.aboutMe && "slide"} ${
          !textAppearDelay.aboutMe && "slide__text"
        } slide__text_type_animated`}
        href="#about-me"
      >
        <h2 style={{ margin: 0, all: "unset", fontSize: "20px" }}>ОБО МНЕ</h2>
      </a>
      <a
        onClick={handleNavigatePrices}
        className={`${textAppearDelay.price && "slide"} ${
          !textAppearDelay.price && "slide__text"
        } slide__text_type_animated`}
        href="#prices"
      >
        <h2 style={{ margin: 0, all: "unset", fontSize: "20px" }}>СТОИМОСТЬ УСЛУГ</h2>
      </a>
      <a
        onClick={handleNavigateOrder}
        className={`${textAppearDelay.order && "slide"} ${
          !textAppearDelay.order && "slide__text"
        } slide__text_type_animated`}
        href="#make-an-order"
      >
        <h2 style={{ margin: 0, all: "unset", fontSize: "20px" }}>ОФОРМИТЬ ЗАКАЗ</h2>
      </a>
    </nav>
  );
}

export default Slide;
