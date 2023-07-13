import React from "react";
import Scroll3D from "./Scroll3D";
import loresiSlide0 from "../images/Loresi/loresiSlide0.png";
import loresiSlide1 from "../images/Loresi/loresiSlide1_6_11zon.webp";
import loresiSlide2 from "../images/Loresi/loresiSlide2_7_11zon.webp";
import loresiSlide3 from "../images/Loresi/loresiSlide3_8_11zon.webp";
import loresiSlide4 from "../images/Loresi/loresiSlide4_9_11zon.webp";
import loresiSlide5 from "../images/Loresi/loresiSlide5_10_11zon.webp";
import loresiSlide6 from "../images/Loresi/loresiSlide6_11_11zon.webp";
import loresiSlide7 from "../images/Loresi/loresiSlide7_12_11zon.webp";
import loresiSlide8 from "../images/Loresi/loresiSlide8_13_11zon.webp";
import LoresiMobileTitle from "../images/Loresi/LoresiMobileTitle.webp";

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
      image: LoresiMobileTitle,
      mediaClass: "scroll3D__frame-media_left",
    }
  ];

  return <Scroll3D frames={frames} />;
}

export default Loresi3D;
