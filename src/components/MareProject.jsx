import React from "react";
import { useSelector } from "react-redux";
import ProjectPictures from "./ProjectPictures";
import mareSlide1 from "../images/Mare/mareSlide1_19_11zon.webp";
import mareSlide2 from "../images/Mare/mareSlide2_20_11zon.webp";
import mareSlide3 from "../images/Mare/mareSlide3_21_11zon.webp";
import mareSlide4 from "../images/Mare/mareSlide4_22_11zon.webp";
import mareSlide5 from "../images/Mare/mareSlide5_23_11zon.webp";
import mareSlide6 from "../images/Mare/mareSlide6_24_11zon.webp";
import mareSlide7 from "../images/Mare/mareSlide7_14_11zon.webp";
import MareMobileTitle from "../images/Mare/MareMobileTitle_16_11zon.webp";

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
