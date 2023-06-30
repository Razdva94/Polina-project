import React from "react";
import { useSelector } from "react-redux";
import ProjectPictures from "./ProjectPictures";
import teaSlide1 from "../images/teaSlide1.jpg";
import teaSlide2 from "../images/TeaSlide2.jpg";
import teaSlide3 from "../images/teaSlide3.jpg";
import teaSlide4 from "../images/teaSlide4.jpg";
import teaSlide5 from "../images/teaSlide5.jpg";
import teaSlide6 from "../images/teaSlide6.jpg";
import teaSlide7 from "../images/teaSlide7.jpg";

function TeaProject() {
  const typeOfProject = useSelector((state) => state.portfolio.portfolio.type);
  const [isOpened, setIsOpened] = React.useState(false);
  const pictures = [teaSlide1, teaSlide2, teaSlide3, teaSlide4, teaSlide5, teaSlide6, teaSlide7];

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
