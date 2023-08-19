import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { startTransition } from "react";
import "../blocks/header/header__swiper-styles.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Header({ images }) {
  const navigate = useNavigate();
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
      setIsWideScreen(window.innerWidth >= 551);
    }
    startTransition(() => {
      handleResize();
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function goToAbouMe(){
    navigate("/about-me");
  }
  function goToMakeAnOrder(){
    navigate("/make-an-order");
  }
  function goToPrices(){
    navigate("/prices");
  }
  return (
    <>
      <div className="header">
        <nav className="header__cap">
          <a href="#portfolio" className="header__nav">Портфолио</a>
          <a href="#about-me" id="main" className="header__nav" onClick={goToAbouMe}>обо мне</a>
          <a href="make-an-order" onClick={goToMakeAnOrder} className="header__nav">Оформить заказ</a>
          <a href="prices" onClick={goToPrices} className="header__nav">Стоимость услуг</a>
        </nav>
        <h1 className="header__text header__text_type_name">
          Maisheva Polina
        </h1>
        <h2
          className="header__text header__text_type_profession"
        >
          Графический дизайнер
        </h2>
      </div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              allowTouchMove={false}
              navigation={false}
              loop={true}
              speed={700}
              slidesPerView={1}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={isWideScreen ? slide.image : slide.mobileImage}
                    alt={slide.alt}
                    style={{ objectFit: "contain", opacity: "1" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
