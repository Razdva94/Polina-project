/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Footer";

function Prices() {
  const logoStandart = [
    "2 концепции логотипа с презентацией",
    "2 этапа правок в рамках брифа",
    "2-3 альтернативные версии логотипа",
    "Сокращённая версия логотипа",
    "Адаптация на тёмном, светлом и прозрачном фоне",
    "Файлы для Web (jpg, png) и печати (pdf, ai, eps)",
    "Срок разработки 10-12 дней",
  ];

  const formStyle = [
    "2 концепции логотипа с расширенной презентацией",
    "3 этапа правок в рамках брифа",
    "2-3 альтернативные версии логотипа",
    "Сокращённая версия логотипа",
    "Адаптация на тёмном, светлом и прозрачном фоне",
    "Подбор шрифтов и цветовой палитры (RGB, SMYK)",
    "4 макета на выбор (визитка/прайс и т.д.)",
    "Файлы для Web (jpg, png) и печати (pdf ai eps)",
    "Guidebook — руководство по использованию фирменного стиля",
    "Срок разработки 15 дней",
  ];

  const instagram = [
    "Анализ профиля",
    "Оформление шапки профиля",
    "Аватарка профиля",
    "Оформление актуальных сторис",
    "Оформление ленты (12-15 постов)",
    "Отбор и цветокоррекция ваших фото",
    "Подбор материала с фотостоков",
    "Инструкция для самостоятельного ведения профиля",
    "Срок разработки 7-10 дней",
  ];

  const poligraph = [
    "Визитка",
    "Бирка",
    "Наклейка",
    "Сертификат",
    "Флаер/листовка",
    "Прайс",
    "Срок разработки 3-5 дней",
  ];

  const poligraphPrices = [
    "1000  ₽",
    "1000  ₽",
    "1000  ₽",
    "1300  ₽",
    "1300  ₽",
    "1300  ₽",
  ];
  return (
    <div className="page__container">
      <div className="prices">
        <h2 className="prices__header" id="prices">
          СТОИМОСТЬ УСЛУГ
        </h2>
        <div className="prices__container">
          {/* <div className="prices__block">
            <h2 className="prices__title">
              <span style={{ fontFamily: "ProstoOne" }}>Логотип </span>Lite
            </h2>
            {logoLite.map((string, i) => {
              return (
                <p key={i} className="prices__text">
                  {string}
                </p>
              );
            })}
            <p
              className="prices__text"
              style={{
                marginBottom: "0",
                marginTop: "auto",
                fontFamily: "Inter",
                paddingTop: "35px",
              }}
            >
              &rarr; 6000 ₽.
            </p>
          </div> */}
          <div className="prices__block">
            <h2 className="prices__title">
              <span style={{ fontFamily: "ProstoOne" }}>Логотип </span>
            </h2>
            {logoStandart.map((string, i) => {
              return <p key={i} className="prices__text">{string}</p>;
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
              &rarr; 9000 ₽.
            </p>
          </div>
          <div className="prices__block">
            <h2 className="prices__title">
              <span style={{ fontFamily: "ProstoOne" }}>Фирменный стиль</span>
            </h2>
            {formStyle.map((string, i) => {
              return <p key={i} className="prices__text">{string}</p>;
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
              &rarr; 18000 ₽.
            </p>
          </div>
          <div className="prices__block">
            <h2 className="prices__title">
              <span style={{ fontFamily: "ProstoOne" }}>Instagram</span>
            </h2>
            {instagram.map((string, i) => {
              return <p key={i} className="prices__text">{string}</p>;
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
          <div>
            <h2 className="prices__title">
              <span style={{ fontFamily: "ProstoOne" }}>Полиграфия</span>
            </h2>
            {poligraph.map((string, i) => {
              return (
                <p key={i} className="prices__text">
                  {string}
                  <span style={{ float: "right", fontFamily: "Inter" }}>
                    {i !== 6 ? <>&rarr;</> : ""}
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
