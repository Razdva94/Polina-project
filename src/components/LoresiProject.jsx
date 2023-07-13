import React from "react";
import { useSelector } from "react-redux";
import ProjectPictures from "./ProjectPictures";
import loresiSlide1 from "../images/Loresi/loresiSlide1_6_11zon.webp";
import loresiSlide2 from "../images/Loresi/loresiSlide2_7_11zon.webp";
import loresiSlide3 from "../images/Loresi/loresiSlide3_8_11zon.webp";
import loresiSlide4 from "../images/Loresi/loresiSlide4_9_11zon.webp";
import loresiSlide5 from "../images/Loresi/loresiSlide5_10_11zon.webp";
import loresiSlide6 from "../images/Loresi/loresiSlide6_11_11zon.webp";
import loresiSlide7 from "../images/Loresi/loresiSlide7_12_11zon.webp";
import loresiSlide8 from "../images/Loresi/loresiSlide8_13_11zon.webp";
import LoresiMobileTitle from "../images/Loresi/LoresiMobileTitle.webp";

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
