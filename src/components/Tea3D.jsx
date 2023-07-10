import React from "react";
import Scroll3D from "./Scroll3D";
import TeaMobileTitle from "../images/Tea/TeaMobileTitle.jpg";
import teaSlide2 from "../images/Tea/TeaSlide2.jpg";
import teaSlide3 from "../images/Tea/teaSlide3.jpg";
import teaSlide4 from "../images/Tea/teaSlide4.jpg";
import teaSlide5 from "../images/Tea/teaSlide5.jpg";
import teaSlide6 from "../images/Tea/teaSlide6.jpg";
import teaSlide7 from "../images/Tea/teaSlide7.jpg";
import teaSlide0 from "../images/Tea/teaSlide0.png";

function Tea3D() {
  const frames = [
    {
      id: 1,
      image: teaSlide0,
      mediaClass: "",
    },
    {
      id: 2,
      image: teaSlide3,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 3,
      image: TeaMobileTitle,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 4,
      image: teaSlide2,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 5,
      image: teaSlide4,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 6,
      image: teaSlide5,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 7,
      image: teaSlide6,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 8,
      image: teaSlide7,
      mediaClass: "scroll3D__frame-media_left",
    }
  ];

  return <Scroll3D frames={frames} />;
}

export default Tea3D;
