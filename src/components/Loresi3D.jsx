import React from "react";
import Scroll3D from "./Scroll3D";
import loresiSlide0 from "../images/loresiSlide0.png";
import loresiSlide1 from "../images/loresiSlide1.jpg";
import loresiSlide2 from "../images/loresiSlide2.jpg";
import loresiSlide3 from "../images/loresiSlide3.jpg";
import loresiSlide4 from "../images/loresiSlide4.jpg";
import loresiSlide5 from "../images/loresiSlide5.jpg";
import loresiSlide6 from "../images/loresiSlide6.jpg";
import loresiSlide7 from "../images/loresiSlide7.jpg";
import loresiSlide8 from "../images/loresiSlide8.jpg";
import loresiSlide9 from "../images/loresiSlide9.jpg";

function Loresi3D() {
  const frames = [
    {
      id: 1,
      image: loresiSlide0,
      mediaClass: "",
      style: {
        width: "50%",
        height: "auto",
      },
    },
    {
      id: 2,
      image: loresiSlide1,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 3,
      image: loresiSlide2,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 4,
      image: loresiSlide3,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 5,
      image: loresiSlide4,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 6,
      image: loresiSlide5,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 7,
      image: loresiSlide6,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 8,
      image: loresiSlide7,
      mediaClass: "scroll3D__frame-media_left",
    },
    {
      id: 9,
      image: loresiSlide8,
      mediaClass: "scroll3D__frame-media_right",
    },
    {
      id: 10,
      image: loresiSlide9,
      mediaClass: "scroll3D__frame-media_left",
    }
  ];

  return <Scroll3D frames={frames} />;
}

export default Loresi3D;