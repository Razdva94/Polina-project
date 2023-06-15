import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import MareTitle from "../images/MareTitle.jpg";
import LoresiTitle from "../images/LoresiTitle.jpg";
import TeaTitle from "../images/TeaTitle.jpg";
import "../blocks/header/header__swiper-styles.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Header() {
  const slides = [
    {
      id: 1,
      image: MareTitle,
      alt: "Mare-title",
    },
    {
      id: 2,
      image: TeaTitle,
      alt: "Tea-title",
    },
    {
      id: 3,
      image: LoresiTitle,
      alt: "Loresi-title",
    },
  ];
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      allowTouchMove={false}
      navigation={false}
      loop={true}
      speed={2000}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      style={{ paddingBottom: "120px", backgroundColor: "rgb(7,7,7)" }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.image} alt={slide.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
