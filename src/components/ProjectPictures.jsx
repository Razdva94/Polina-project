import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import usePopupClose from "../hooks/usePopupClose";

function ProjectPictures({ picture1, picture2, picture3, isOpened, closePopup }) {
  usePopupClose(isOpened, closePopup);
  return (
    <div
      className={`project ${isOpened && "project_opened"}`}
      style={{ overflow: "hidden" }}
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ width: "40%", margin: "auto", height: "80%" }}
      >
        <SwiperSlide style={{ height: "100%" }}>
          <div className="slide-image-wrapper">
            <img
              src={picture1}
              alt="seaPicture"
              className="slide-image"
              style={{ objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className="slide-image-wrapper">
            <img
              src={picture2}
              alt="Mare"
              className="slide-image"
              style={{ objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className="slide-image-wrapper">
            <img
              src={picture3}
              alt="forest"
              className="slide-image"
              style={{ objectPosition: "center" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <style>
        {`
        .swiper-wrapper{
          user-select:none;

        }
        .swiper-container {
          overflow: hidden;
          user-select: none;
        }

        .mySwiper .swiper-button-next,
        .mySwiper .swiper-button-prev {
          cursor: pointer;
          user-select: none;
          color: gray;
        }

        .mySwiper .swiper-pagination-bullet {
          cursor: pointer;
          outline: none;
          background-color: gray;
          user-select:none;
        }

        .mySwiper .swiper-pagination-bullet-active {
          cursor: pointer;
          outline: none;
          background-color: darkgray;
        }

        .slide-image-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden; /* Отключение скролла на элементе-обертке */
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .swiper-slide {
          outline: none; 
        }

        body, #root {
          margin: 0;
        }
        `}
      </style>
    </div>
  );
}

export default ProjectPictures;
