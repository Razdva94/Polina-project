import React from "react";
import { useNavigate } from "react-router-dom";
import instagram from "../images/i.webp";
import Behance from "../images/Behance.png";
import Whatsapp from "../images/Whatsapp.png";
import Telegramm from "../images/Telegramm.png";

function Footer() {
  const navigate = useNavigate();

  function goToPrices(){
    navigate("/prices");
  }

  function goToMakeAnOrder(){
    navigate("/make-an-order");
  }
  function goToAboutME(){
    navigate("/about-me");
  }
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__text-container">
          <a className="footer__text" href="#about-me" onClick={goToAboutME}>Обо мне</a>
          <a className="footer__text" href="#prices" onClick={goToPrices}>Стоимость услуг</a>
          <a className="footer__text" href="#make-an-order" onClick={goToMakeAnOrder}>Оформить заказ</a>
        </nav>
        <div className="footer__icon-container">
          <a
            href="https://t.me/polinam_design"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon footer__icon_type_telegram"
              src={Telegramm}
              alt="Telegram"
            />
          </a>
          <a
            href="https://www.behance.net/polinaadesign"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon footer__icon_type_behance"
              src={Behance}
              alt="Behance"
            />
          </a>
          <a href="https://wa.me/+79819412392" target="_blank" rel="noreferrer">
            <img
              className="footer__icon footer__icon_type_watsapp"
              src={Whatsapp}
              alt="Whatsapp"
            />
          </a>
          <a
            href="https://www.instagram.com/polinam_design/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon footer__icon_type_instagram"
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
