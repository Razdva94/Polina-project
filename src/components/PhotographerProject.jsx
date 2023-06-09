import React from "react";
import { useSelector } from "react-redux";
import seaPicture from "../images/sea.jpg";
import forest from "../images/forest.jpg";
import sky from "../images/sky.jpg";
import ProjectPictures from "./ProjectPictures";

function PhotographerProject() {
  const typeOfProject = useSelector((state) => state.portfolio.portfolio.type);
  const [isOpened, setIsOpened] = React.useState(false);
  React.useEffect(() => {
    if (typeOfProject === "Photographer") {
      setIsOpened(true);
    }
  }, [typeOfProject]);
  function closePopup(){
    setIsOpened(false);
  }
  return (
    <ProjectPictures
      picture1={forest}
      picture2={sky}
      picture3={seaPicture}
      isOpened={isOpened}
      closePopup={closePopup}
    />
  );
}

export default PhotographerProject;
