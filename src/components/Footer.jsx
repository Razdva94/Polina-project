import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text-container">
          <p className="footer__text">Обо мне</p>
          <p className="footer__text">Цены</p>
          <p className="footer__text">Контакты</p>
        </div>
        <div className="footer__text-container">
          <img className="footer__icon" src="https://static.tildacdn.com/tild3839-3138-4438-a236-393266363134/Telegram.svg" alt="Telegram" />
          <img className="footer__icon" src="https://static.tildacdn.com/tild3762-3435-4265-a332-346633363037/behance.svg" alt="Behance" />
          <img className="footer__icon" src="https://static.tildacdn.com/tild6339-6532-4134-a334-393163396338/WhatsApp.svg" alt="Whatsapp" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
