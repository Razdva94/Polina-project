/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import usePopupClose from "../hooks/usePopupClose";

function ProjectPictures({ pictures, isOpened, closePopup }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperKey = isOpened ? "opened" : "closed";
  usePopupClose(isOpened, closePopup);

  useEffect(() => {
    if (isOpened) {
      setCurrentSlideIndex(0);
    }
  }, [isOpened]);

  return (
    <div
      className={`project ${isOpened && "project_opened"}`}
      style={{ overflow: "hidden" }}
    >
      <Swiper
        key={swiperKey}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{
          width: " calc(var(--index) * var(--side-small)*.9)",
          margin: "auto",
          height: "calc(var(--index) * var(--side-big)*.8)",
        }}
        initialSlide={currentSlideIndex}
        slidesPerView={1}
        loop={true}
        spaceBetween={0}
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={index} style={{ height: "100%" }}>
            <div className="slide-image-wrapper">
              <img
                src={picture}
                alt={`Picture ${index + 1}`}
                className="slide-image"
                style={{ objectPosition: "center" }}
              />
            </div>
          </SwiperSlide>
        ))}
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
          overflow: hidden;
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
