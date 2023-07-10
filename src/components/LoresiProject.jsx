import React from "react";
import { useSelector } from "react-redux";
import ProjectPictures from "./ProjectPictures";
import loresiSlide1 from "../images/Loresi/loresiSlide1.jpg";
import loresiSlide2 from "../images/Loresi/loresiSlide2.jpg";
import loresiSlide3 from "../images/Loresi/loresiSlide3.jpg";
import loresiSlide4 from "../images/Loresi/loresiSlide4.jpg";
import loresiSlide5 from "../images/Loresi/loresiSlide5.jpg";
import loresiSlide6 from "../images/Loresi/loresiSlide6.jpg";
import loresiSlide7 from "../images/Loresi/loresiSlide7.jpg";
import loresiSlide8 from "../images/Loresi/loresiSlide8.jpg";
import LoresiMobileTitle from "../images/Loresi/LoresiMobileTitle.jpg";

function LoresiProject() {
  const typeOfProject = useSelector((state) => state.portfolio.portfolio.type);
  const [isOpened, setIsOpened] = React.useState(false);
  const pictures = [loresiSlide1, loresiSlide2, loresiSlide3, loresiSlide4,
    loresiSlide5, loresiSlide6, loresiSlide7, loresiSlide8, LoresiMobileTitle];

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
