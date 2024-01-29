/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Footer";

function Prices() {
  const logoStandart = [
    "2 концепции логотипа с презентацией",
    "2 этапа правок в рамках брифа",
    "3 альтернативные версии логотипа",
    "Подбор цветовой палитры",
    "Адаптация на тёмном, светлом и прозрачном фоне",
    "Файлы для Web (jpg, png) и печати (pdf, ai, eps)",
    "Срок разработки до 10 дней",
  ];

  const formStyle = [
    "Логотип (все, что входит в пакет)",
    "Подбор шрифтов и цветовой палитры (RGB, SMYK)",
    "Подбор фирменной графики",
    "Разработка фирменного паттерна",
    "Рекомендации по фотостилю",
    "4 макета на выбор (оговариваются индивидуально)",
    "Файлы для Web (jpg, png) и печати (pdf ai eps)",
    "GUIDEBOOK — руководство по использованию фирменного стиля",
    "Срок разработки до 16 дней",
  ];

  const poligraph = [
    "Наклейка",
    "Этикетка",
    "Бирка",
    "Визитка",
    "Флайер/Листовка",
    "Прайс-лист",
    "Меню",
    "Подарочный сертификат",
    "Открытка",
    "Буклет",
    "Приглашение",
    "Фирменный бланк",
    "Афиша/Плакат",
    "Евробуклет",
    "Пакет",
    "Коробка",
    "Верстка страницы",
  ];

  const poligraphPrices = [
    "1000  ₽",
    "1500  ₽",
    "1500  ₽",
    "1500  ₽",
    "1500  ₽",
    "2000  ₽",
    "2000  ₽",
    "2000  ₽",
    "2000  ₽",
    "2000  ₽",
    "2000  ₽",
    "2000  ₽",
    "2000  ₽",
    "2500  ₽",
    "3000  ₽",
    "3000  ₽",
    "300 ₽/стр",
  ];
  return (
    <div className="page__container">
      <div className="prices">
        <h2 className="prices__header" id="prices">
          СТОИМОСТЬ УСЛУГ
        </h2>
        <div className="prices__container">
          <div className="prices__block">
            <h2 className="prices__title">
              <span style={{ fontFamily: "ProstoOne" }}>Логотип </span>
            </h2>
            {logoStandart.map((string, i) => {
              return (
                <p key={i} className="prices__text">
                  {string}
                </p>
              );
            })}
            <p
              className="prices__text"
              style={{
                fontFamily: "Inter",
                marginBottom: "0",
                paddingTop: "35px",
                marginTop: "auto",
              }}
            >
              &rarr; 10000 ₽.
            </p>
          </div>
          <div className="prices__block">
            <h2 className="prices__title">
              <span style={{ fontFamily: "ProstoOne" }}>Фирменный стиль</span>
            </h2>
            {formStyle.map((string, i) => {
              return (
                <p key={i} className="prices__text">
                  {string}
                </p>
              );
            })}
            <p
              className="prices__text"
              style={{
                fontFamily: "Inter",
                marginBottom: "0",
                paddingTop: "35px",
                marginTop: "auto",
              }}
            >
              &rarr; 23000 ₽.
            </p>
          </div>
          <div className="prices__block">
            <h2 className="prices__title">
              <span style={{ fontFamily: "ProstoOne" }}>Полиграфия</span>
            </h2>
            {poligraph.map((string, i) => {
              return (
                <p key={i} className="prices__text">
                  {string}
                  <span style={{ float: "right", fontFamily: "Inter" }}>
                    {i !== 700 ? <>&rarr;</> : ""}
                    {poligraphPrices[i]}
                  </span>
                </p>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Prices;
