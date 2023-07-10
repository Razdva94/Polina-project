import React from "react";
import { useSelector } from "react-redux";
import ProjectPictures from "./ProjectPictures";
import TeaMobileTitle from "../images/Tea/TeaMobileTitle.jpg";
import teaSlide2 from "../images/Tea/TeaSlide2.jpg";
import teaSlide3 from "../images/Tea/teaSlide3.jpg";
import teaSlide4 from "../images/Tea/teaSlide4.jpg";
import teaSlide5 from "../images/Tea/teaSlide5.jpg";
import teaSlide6 from "../images/Tea/teaSlide6.jpg";
import teaSlide7 from "../images/Tea/teaSlide7.jpg";

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
