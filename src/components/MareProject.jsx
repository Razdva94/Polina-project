import React from "react";
import { useSelector } from "react-redux";
import seaPicture from "../images/sea.jpg";
import forest from "../images/forest.jpg";
import sky from "../images/sky.jpg";
import ProjectPictures from "./ProjectPictures";

function MareProject() {
  const typeOfProject = useSelector((state) => state.portfolio.portfolio.type);
  const [isOpened, setIsOpened] = React.useState(false);
  React.useEffect(() => {
    if (typeOfProject === "Mare") {
      setIsOpened(true);
    }
  }, [typeOfProject]);

  return (
    <ProjectPictures
      picture1={sky}
      picture2={forest}
      picture3={seaPicture}
      isOpened={isOpened}
    />
  );
}

export default MareProject;
