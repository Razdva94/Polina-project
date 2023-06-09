import React from "react";
import { useSelector } from "react-redux";
import seaPicture from "../images/sea.jpg";
import forest from "../images/forest.jpg";
import sky from "../images/sky.jpg";
import ProjectPictures from "./ProjectPictures";

function LoresyProject() {
  const typeOfProject = useSelector((state) => state.portfolio.portfolio.type);
  const [isOpened, setIsOpened] = React.useState(false);
  React.useEffect(() => {
    if (typeOfProject === "Loresi") {
      setIsOpened(true);
    }
  }, [typeOfProject]);

  return (
    <ProjectPictures
      picture1={seaPicture}
      picture2={forest}
      picture3={sky}
      isOpened={isOpened}
    />
  );
}

export default LoresyProject;
