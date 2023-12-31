/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { isMobile, isTablet } from "react-device-detect";
import { Pagination, Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openPortfolioPictures } from "../store/portfolioSlice";
import MarePortfolioTItle from "../images/Mare/MarePortfolioTitle_17_11zon.webp";
import TeaPortfolioTitle from "../images/Tea/TeaPortfolioTitle_29_11zon.webp";
import LoresiPortfolioTitle from "../images/Loresi/LoresiPortfolioTitle.webp";
import { MARE_TEXT, TEA_TEXT, LORESI_TEXT } from "../utils/constants";
import "../blocks/yourComponent/yourComponent.css";

export default function Main() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleOpenPictures() {
    if (isMobile || isTablet) {
      index === 0 ? dispatch(openPortfolioPictures("Mare")) : "";
      index === 1 ? dispatch(openPortfolioPictures("Tea")) : "";
      index === 2 ? dispatch(openPortfolioPictures("Loresi")) : "";
    } else {
      index === 0 ? navigate("/mare3D") : "";
      index === 1 ? navigate("/tea3D") : "";
      index === 2 ? navigate("/loresi3D") : "";
    }
  }
  const handleSlideChange = (swiper) => {
    setIndex(swiper.realIndex);
    console.log(swiper.realIndex);
  };

  return (
    <section className="portfolio">
      <h2 className="portfolio__title" id="portfolio">
        Портфолио
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper1"
        onSlideChangeTransitionEnd={handleSlideChange}
      >
        <SwiperSlide>
          <img
            className="portfolio__image"
            src={MarePortfolioTItle}
            alt="Mare"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="portfolio__image" src={TeaPortfolioTitle} alt="Tea" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="portfolio__image"
            src={LoresiPortfolioTitle}
            alt="Loresi"
          />
        </SwiperSlide>
      </Swiper>
      <div
        style={{
          color: "white",
          width: "calc(var(--index) * var(--side-big)*.9)",
          marginTop: "30px",
        }}
      >
        {index === 0 ? (
          <MARE_TEXT />
        ) : index === 1 ? (
          <TEA_TEXT />
        ) : index === 2 ? (
          <LORESI_TEXT />
        ) : (
          ""
        )}
        <button
          type="button"
          onClick={handleOpenPictures}
          className="portfolio__button"
        >
          &rarr; Увидеть больше{" "}
        </button>
      </div>
    </section>
  );
}
