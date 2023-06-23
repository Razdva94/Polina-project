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
import mareSlide8 from "../images/mareSlide8.jpg";
import teaSlide1 from "../images/teaSlide1.jpg";
import loresiSlide9 from "../images/loresiSlide9.jpg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Header() {
  const [isWideScreen, setIsWideScreen] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 550);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slides = [
    {
      id: 1,
      image: MareTitle,
      alt: "Mare-title",
      mobileImage: mareSlide8
    },
    {
      id: 2,
      image: TeaTitle,
      alt: "Tea-title",
      mobileImage: teaSlide1
    },
    {
      id: 3,
      image: LoresiTitle,
      alt: "Loresi-title",
      mobileImage: loresiSlide9
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
          <img src={isWideScreen ? slide.image : slide.mobileImage} alt={slide.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
