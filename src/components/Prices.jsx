/* eslint-disable no-unused-vars */
import React from "react";
import Select from "react-select";
import Footer from "./Footer";

const optionsLogoLite = [
  { value: "1", label: "1 концепция логотипа с презентацией" },
  { value: "2", label: "1 этап правок в рамках брифа" },
  { value: "3", label: "2-3 альтернативные версии логотипа" },
  { value: "4", label: "Адаптация на темном, светлом и прозрачном фоне" },
  { value: "5", label: "Файлы для Web (jpg, png) и печати (pdf, ai, eps)" },
  { value: "6", label: "Logobook - руководство по использованию логотипа" },
  { value: "7", label: "Срок разработки 10-12 дней" },
];

const optionsLogoLiteText = {
  mainInfo: "Логотип",
  addInfo: " lite",
  price: "6000рублей",
};

const optionsLogoStandart = [
  { value: "1", label: "2 концепция логотипа с презентацией" },
  { value: "2", label: "2 этапа правок в рамках брифа" },
  { value: "3", label: "2-3 альтернативные версии логотипа" },
  { value: "4", label: "Сокращенная версия логотипа" },
  { value: "5", label: "Адаптация на темном, светлом и прозрачном фоне" },
  { value: "6", label: "Файлы для Web (jpg, png) и печати (pdf, ai, eps)" },
  { value: "7", label: "Logobook - руководство по использованию логотипа" },
  { value: "8", label: "Срок разработки 10-12 дней" },
];

const optionsLogoStandartText = {
  mainInfo: "Логотип",
  addInfo: " standart",
  price: "9000рублей",
};

const optionsFormStyle = [
  { value: "1", label: "2 концепция логотипа с расширенной презентацией" },
  { value: "2", label: "3 этапа правок в рамках брифа" },
  { value: "3", label: "2-3 альтернативные версии логотипа" },
  { value: "4", label: "Сокращенная версия логотипа" },
  { value: "5", label: "Адаптация на темном, светлом и прозрачном фоне" },
  { value: "6", label: "Подбор шрифтов и цветовой палитры (RGB, SMYK)" },
  { value: "7", label: "5 макетов на выбор (визитка/прайс и т.д.)" },
  { value: "8", label: "Файлы для Web (jpg, png) и печати (pdf ai eps)" },
  {
    value: "9",
    label: "Guidebook - руководство по использованию фирменного стиля",
  },
  { value: "10", label: "срок разработки 15 дней" },
];

const optionsFormStyleText = {
  mainInfo: "Фирменный стиль",
  addInfo: "",
  price: "12000рублей",
};

const optionsInstagram = [
  { value: "1", label: "Анализ профиля" },
  { value: "2", label: "Оформление шапки профиля" },
  { value: "3", label: "Аватарка профиля" },
  { value: "4", label: "Оформление актуальных сторис" },
  { value: "5", label: "Оформление ленты (12-15 постов)" },
  { value: "6", label: "Отбор и цветокоррекция ваших фото" },
  { value: "7", label: "Подбор материала с фотостоков" },
  { value: "8", label: "Инструкция для самостоятельного ведения профиля" },
  { value: "9", label: "Срок разарботки 7-10 дней" },
];

const optionsInstagramText = {
  mainInfo: "Инстаграм",
  addInfo: "",
  price: "10000рублей",
};

const optionsPoligraph = [
  { value: "1", label: "Визитка.1000рублей" },
  { value: "2", label: "Бирка.1000рублей" },
  { value: "3", label: "Наклейка.1000рублей" },
  { value: "4", label: "Сертификат.1300рублей" },
  { value: "5", label: "Флаер/листовка.1300рублей" },
  { value: "6", label: "Прайс.1300рублей" },
  { value: "7", label: "Срок разработки 3-5 дней" },
];

const optionsList = [
  optionsLogoLite,
  optionsLogoStandart,
  optionsFormStyle,
  optionsInstagram,
];

const optionsListText = [
  optionsLogoLiteText,
  optionsLogoStandartText,
  optionsFormStyleText,
  optionsInstagramText,
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    border: state.isFocused ? "1px solid white" : "1px solid grey",
    marginTop: "0px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "lightgrey" : "white",
    color: state.isSelected ? "grey" : "black",
    fontSize: "12px",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
  placeholder: () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    cursor: "default",
    paddingRight: "10px",
    textAlign: "left",
  }),
  logoText: {
    fontSize: "15px",
    fontWeight: "bold",
    marginRight: "5px",
  },
  liteText: {
    fontSize: "15px",
    fontWeight: "normal",
  },
  priceText: {
    marginLeft: "auto",
  },
  css19bb58m: {
    display: "none",
  },
};

function CustomOption({ innerProps, label }) {
  return (
    <div
      {...innerProps}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "8px 12px",
        boxSizing: "border-box",
        fontSize: "12px",
      }}
    >
      <span style={{ marginRight: "auto" }}>{label.split(".")[0]}</span>
      <span style={{ ...customStyles.priceText, marginLeft: "10px" }}>
        {label.split(".")[1]}
      </span>
    </div>
  );
}

function Prices() {
  return (
    <div className="page__container">
      <div className="prices">
        <div>
          <h2 className="prices__header">*Невозвратная предоплата 50%</h2>
          {optionsList.map((options, index) => (
            <Select
              key={index}
              theme={(theme) => ({
                ...theme,
                borderRadius: 2,
                colors: {
                  ...theme.colors,
                  primary25: "rgba(0,0,0,0)",
                  primary: "rgba(0,0,0,0)",
                },
              })}
              className="prices__select"
              options={options}
              placeholder={(
                <>
                  <span style={customStyles.logoText}>
                    {optionsListText[index].mainInfo}
                    <span style={customStyles.liteText}>
                      {optionsListText[index].addInfo}
                    </span>
                  </span>
                  <span style={customStyles.liteText}>
                    {optionsListText[index].price}
                  </span>
                </>
              )}
              styles={customStyles}
              isOptionDisabled={() => true}
            />
          ))}
          <Select
            theme={(theme) => ({
              ...theme,
              borderRadius: 2,
              colors: {
                ...theme.colors,
                primary25: "rgba(0,0,0,0)",
                primary: "rgba(0,0,0,0)",
              },
            })}
            components={{
              Option: CustomOption,
            }}
            className="prices__select"
            options={optionsPoligraph}
            placeholder={<span style={customStyles.logoText}>Полиграфия</span>}
            styles={customStyles}
            isOptionDisabled={() => true}
          />
          <style>
            {`
            .css-qbdosj-Input {
              display: none;
            }
          `}
          </style>
        </div>
        <div className="contacts">
          <h2 className="form__title">Связь со мной</h2>
          <a
            href="https://wa.me/+79819412392"
            target="_blank"
            rel="noreferrer"
            className="form__text"
          >
            +TELEGRAM
          </a>
          <a
            className="form__text"
            href="https://wa.me/+79819412392"
            target="_blank"
            rel="noreferrer"
          >
            +WHATSAPP
          </a>
          <a
            className="form__text"
            href="https://www.instagram.com/polinam_design/"
            target="_blank"
            rel="noreferrer"
          >
            +INSTAGRAM
          </a>
          <a
            className="form__text"
            href="https://www.behance.net/polinaadesign"
            target="_blank"
            rel="noreferrer"
          >
            +BEHANCE
          </a>
          <p className="form__text">MAISHEVA.POLINA@MAIL.RU</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Prices;
