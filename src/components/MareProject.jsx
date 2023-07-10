import React from "react";
import { useSelector } from "react-redux";
import ProjectPictures from "./ProjectPictures";
import mareSlide1 from "../images/Mare/mareSlide1.jpg";
import mareSlide2 from "../images/Mare/mareSlide2.jpg";
import mareSlide3 from "../images/Mare/mareSlide3.jpg";
import mareSlide4 from "../images/Mare/mareSlide4.jpg";
import mareSlide5 from "../images/Mare/mareSlide5.jpg";
import mareSlide6 from "../images/Mare/mareSlide6.jpg";
import mareSlide7 from "../images/Mare/mareSlide7.jpg";
import MareMobileTitle from "../images/Mare/MareMobileTitle.jpg";

function MareProject() {
  const typeOfProject = useSelector((state) => state.portfolio.portfolio.type);
  const [isOpened, setIsOpened] = React.useState(false);
  const pictures = [
    mareSlide1,
    mareSlide2,
    mareSlide3,
    mareSlide4,
    mareSlide5,
    mareSlide6,
    mareSlide7,
    MareMobileTitle,
  ];

  React.useEffect(() => {
    if (typeOfProject === "Mare") {
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

export default MareProject;
