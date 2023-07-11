/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "./Footer";

const logoLite = [
  "1 концепция логотипа с презентацией",
  "1 этап правок в рамках брифа",
  "2-3 альтернативные версии логотипа",
  "Адаптация на темном, светлом и прозрачном фоне",
  "Файлы для Web (jpg, png) и печати (pdf, ai, eps)",
  "Logobook - руководство по использованию логотипа",
  "Срок разработки 10-12 дней",
];

const logoStandart = [
  "2 концепция логотипа с презентацией",
  "2 этапа правок в рамках брифа",
  "2-3 альтернативные версии логотипа",
  "Сокращенная версия логотипа",
  "Адаптация на темном, светлом и прозрачном фоне",
  "Файлы для Web (jpg, png) и печати (pdf, ai, eps)",
  "Logobook - руководство по использованию логотипа",
  "Срок разработки 10-12 дней",
];

const formStyle = [
  "2 концепция логотипа с расширенной презентацией",
  "3 этапа правок в рамках брифа",
  "2-3 альтернативные версии логотипа",
  "Сокращенная версия логотипа",
  "Адаптация на темном, светлом и прозрачном фоне",
  "Подбор шрифтов и цветовой палитры (RGB, SMYK)",
  "5 макетов на выбор (визитка/прайс и т.д.)",
  "Файлы для Web (jpg, png) и печати (pdf ai eps)",
  "Guidebook - руководство по использованию фирменного стиля",
  "срок разработки 15 дней",
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
  "Срок разарботки 7-10 дней",
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

function Prices() {
  return (
    <div className="page__container">
      <h2 className="prices__header">Стоимость услуг</h2>
      <div className="prices__container">
        <div className="prices__block">
          <h2 className="prices__title">
            <span style={{ fontFamily: "Inter" }}>Логотип </span>Lite
          </h2>
          {logoLite.map((string) => {
            return <p className="prices__text">{string}</p>;
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
        </div>
        <div className="prices__block">
          <h2 className="prices__title">
            <span style={{ fontFamily: "Inter" }}>Логотип </span> Standart
          </h2>
          {logoStandart.map((string) => {
            return <p className="prices__text">{string}</p>;
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
            <span style={{ fontFamily: "Inter" }}>Фирменный стиль</span>
          </h2>
          {formStyle.map((string) => {
            return <p className="prices__text">{string}</p>;
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
            &rarr; 12000 ₽.
          </p>
        </div>
        <div className="prices__block">
          <h2 className="prices__title">
            <span style={{ fontFamily: "Inter" }}>Instagram</span>
          </h2>
          {instagram.map((string) => {
            return <p className="prices__text">{string}</p>;
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
            <span style={{ fontFamily: "Inter" }}>Полиграфия</span>
          </h2>
          {poligraph.map((string, i) => {
            return (
              <p className="prices__text">
                {string}
                <span style={{ float: "right", fontFamily: "Inter" }}>{i !== 6 ? <>&rarr;</> : ""}{poligraphPrices[i]}</span>
              </p>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Prices;
