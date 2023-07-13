import React from "react";
import { useSelector } from "react-redux";
import ProjectPictures from "./ProjectPictures";
import TeaMobileTitle from "../images/Tea/TeaMobileTitle_28_11zon.webp";
import teaSlide2 from "../images/Tea/TeaSlide2_31_11zon.webp";
import teaSlide3 from "../images/Tea/teaSlide3_32_11zon.webp";
import teaSlide4 from "../images/Tea/teaSlide4_33_11zon.webp";
import teaSlide5 from "../images/Tea/teaSlide5_34_11zon.webp";
import teaSlide6 from "../images/Tea/teaSlide6_25_11zon.webp";
import teaSlide7 from "../images/Tea/teaSlide7_26_11zon.webp";

function TeaProject() {
  const typeOfProject = useSelector((state) => state.portfolio.portfolio.type);
  const [isOpened, setIsOpened] = React.useState(false);
  const pictures = [TeaMobileTitle, teaSlide2, teaSlide3, teaSlide4, teaSlide5, teaSlide6, teaSlide7];

  React.useEffect(() => {
    if (typeOfProject === "Tea") {
      setIsOpened(true);
    }
  }, [typeOfProject]);

  function closePopup() {
    setIsOpened(false);
  }

  return (
    <ProjectPictures
      pictures={pictures}
      isOpened={isOpened}
      closePopup={closePopup}
    />
  );
}

export default TeaProject;
