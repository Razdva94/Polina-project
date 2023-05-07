import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import seaPicture from "../images/sea.jpg";
import forest from "../images/forest.jpg";
import sky from "../images/sky.jpg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  const slides = [
    {
      id: 1,
      image: seaPicture,
      alt: "море",
    },
    {
      id: 2,
      image: forest,
      alt: "лес",
    },
    {
      id: 3,
      image: sky,
      alt: "небо",
    },
  ];

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      allowTouchMove={false}
      navigation={false}
      loop={false}
      speed={2000}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
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
