import React from "react";
import { useSelector } from "react-redux";
import ProjectPictures from "./ProjectPictures";
import loresiSlide1 from "../images/loresiSlide1.jpg";
import loresiSlide2 from "../images/loresiSlide2.jpg";
import loresiSlide3 from "../images/loresiSlide3.jpg";
import loresiSlide4 from "../images/loresiSlide4.jpg";
import loresiSlide5 from "../images/loresiSlide5.jpg";
import loresiSlide6 from "../images/loresiSlide6.jpg";
import loresiSlide7 from "../images/loresiSlide7.jpg";
import loresiSlide8 from "../images/loresiSlide8.jpg";
import loresiSlide9 from "../images/loresiSlide9.jpg";

function LoresiProject() {
  const typeOfProject = useSelector((state) => state.portfolio.portfolio.type);
  const [isOpened, setIsOpened] = React.useState(false);
  const pictures = [loresiSlide1, loresiSlide2, loresiSlide3, loresiSlide4,
    loresiSlide5, loresiSlide6, loresiSlide7, loresiSlide8, loresiSlide9];

  React.useEffect(() => {
    if (typeOfProject === "Loresi") {
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

export default LoresiProject;
