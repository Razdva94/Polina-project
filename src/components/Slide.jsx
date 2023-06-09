import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSlide } from "../store/slideSlice";

function Slide() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startAnimation, setStartAnimation] = React.useState(true);
  const [textAppearDelay, setTextAppearDelay] = React.useState({
    portfolio: true,
    price: true,
    aboutMe: true,
  });
  const isOpened = useSelector((state) => state.slide.slide);
  React.useEffect(() => {
    const delay = 500;

    const timeoutId = setTimeout(() => {
      setStartAnimation(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);
  React.useEffect(() => {
    if (isOpened) {
      const delay1 = 500;
      const delay2 = 1000;
      const delay3 = 1500;

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

      return () => {
        clearTimeout(timeoutId1);
        clearTimeout(timeoutId2);
        clearTimeout(timeoutId3);
      };
    }
    setTextAppearDelay({
      portfolio: true,
      price: true,
      aboutMe: true,
    });
  }, [isOpened]);

  function handleNavigate() {
    navigate("/");
    dispatch(toggleSlide());
  }
  return (
    <div
      className={`${startAnimation && "slide"} ${
        isOpened ? "slide_opened" : "slide_closed"
      }`}
    >
      {isOpened && (
        <h2
          onClick={handleNavigate}
          className={`${textAppearDelay.portfolio && "slide"} ${
            !textAppearDelay.portfolio && "slide__text"
          } slide__text_type_animated`}
        >
          Портфолио
        </h2>
      )}
      {isOpened && (
        <h2
          className={`${textAppearDelay.price && "slide"} ${
            !textAppearDelay.price && "slide__text"
          } slide__text_type_animated`}
        >
          Цены
        </h2>
      )}
      {isOpened && (
        <h2
          className={`${textAppearDelay.aboutMe && "slide"} ${
            !textAppearDelay.aboutMe && "slide__text"
          } slide__text_type_animated`}
        >
          Обо мне
        </h2>
      )}
    </div>
  );
}

export default Slide;
