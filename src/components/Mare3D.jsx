import React from "react";
import Scroll3D from "./Scroll3D";
import mareSlide0 from "../images/Mare/mareSlide0.png";
import mareSlide1 from "../images/Mare/mareSlide1.jpg";
import mareSlide2 from "../images/Mare/mareSlide2.jpg";
import mareSlide3 from "../images/Mare/mareSlide3.jpg";
import mareSlide4 from "../images/Mare/mareSlide4.jpg";
import mareSlide5 from "../images/Mare/mareSlide5.jpg";
import mareSlide6 from "../images/Mare/mareSlide6.jpg";
import mareSlide7 from "../images/Mare/mareSlide7.jpg";
import MareMobileTitle from "../images/Mare/MareMobileTitle.jpg";

function Mare3D() {
  const frames = [
    {
      id: 1,
      image: mareSlide0,
      mediaClass: "",
    },
    {
      id: 2,
      image: mareSlide1,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 3,
      image: mareSlide2,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 4,
      image: mareSlide3,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 5,
      image: mareSlide4,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 6,
      image: mareSlide5,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 7,
      image: mareSlide6,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 8,
      image: mareSlide7,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 9,
      image: MareMobileTitle,
      mediaClass: "scroll3D__frame-media_right",
    },
  ];

  return <Scroll3D frames={frames} />;
}

export default Mare3D;
