import React from "react";
import Scroll3D from "./Scroll3D";
import TeaMobileTitle from "../images/Tea/TeaMobileTitle_28_11zon.webp";
import teaSlide2 from "../images/Tea/TeaSlide2_31_11zon.webp";
import teaSlide3 from "../images/Tea/teaSlide3_32_11zon.webp";
import teaSlide4 from "../images/Tea/teaSlide4_33_11zon.webp";
import teaSlide5 from "../images/Tea/teaSlide5_34_11zon.webp";
import teaSlide6 from "../images/Tea/teaSlide6_25_11zon.webp";
import teaSlide7 from "../images/Tea/teaSlide7_26_11zon.webp";
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
