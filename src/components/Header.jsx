import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { startTransition } from "react";
import "../blocks/header/header__swiper-styles.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Header({ images }) {
  const [isWideScreen, setIsWideScreen] = React.useState(false);
  const slides = [
    {
      id: 1,
      image: images[0],
      alt: "Mare-title",
      mobileImage: images[3],
    },
    {
      id: 2,
      image: images[1],
      alt: "Tea-title",
      mobileImage: images[4],
    },
    {
      id: 3,
      image: images[2],
      alt: "Loresi-title",
      mobileImage: images[5],
    },
  ];

  React.useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth >= 550);
    }
    startTransition(() => {
      handleResize();
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      allowTouchMove={false}
      navigation={false}
      loop={true}
      speed={700}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      style={{
        paddingBottom: "100px",
        backgroundColor: "rgb(7,7,7)",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={isWideScreen ? slide.image : slide.mobileImage}
            alt={slide.alt}
            style={{ objectFit: "contain" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
