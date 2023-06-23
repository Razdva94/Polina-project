import React from "react";
import { useNavigate } from "react-router-dom";
import instagram from "../images/i.webp";

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
        <div className="footer__text-container">
          <p className="footer__text" onClick={goToAboutME}>Обо мне</p>
          <p className="footer__text" onClick={goToPrices}>Цены</p>
          <p className="footer__text" onClick={goToMakeAnOrder}>Оформить заказ</p>
        </div>
        <div className="footer__text-container">
          <a
            href="https://t.me/polinam_design"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon"
              src="https://static.tildacdn.com/tild3839-3138-4438-a236-393266363134/Telegram.svg"
              alt="Telegram"
            />
          </a>
          <a
            href="https://www.behance.net/polinaadesign"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon"
              src="https://static.tildacdn.com/tild3762-3435-4265-a332-346633363037/behance.svg"
              alt="Behance"
            />
          </a>
          <a href="https://wa.me/+79819412392" target="_blank" rel="noreferrer">
            <img
              className="footer__icon"
              src="https://static.tildacdn.com/tild6339-6532-4134-a334-393163396338/WhatsApp.svg"
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
