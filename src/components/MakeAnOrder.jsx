import React from "react";
import Select from "react-select";
import { motion } from "framer-motion";
import Footer from "./Footer";

const options = [
  { value: "1", label: "01 | Логотип" },
  { value: "2", label: "02 | Логотип" },
  { value: "3", label: "Фирменный стиль" },
  { value: "4", label: "Полиграфия" },
  { value: "5", label: "Оформление Инстаграмма" },
  { value: "6", label: "Другое" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    border: state.isFocused ? "1px solid white" : "1px solid grey",
    height: "50px",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    cursor: "pointer",
    ":active": {
      ...provided[":active"],
      backgroundColor: isSelected ? "blue" : "grey",
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
};

function MakeAnOrder() {
  return (
    <motion.div
      className="page__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="order">
        <form className="form">
          <h2 className="form__title">Оформить заказ</h2>
          <input type="text" className="form__input" placeholder="Ваше имя" />
          <input type="email" className="form__input" placeholder="E-mail" />
          <Select
            theme={(theme) => ({
              ...theme,
              borderRadius: 2,
              colors: {
                ...theme.colors,
                primary25: "grey",
                primary: "black",
              },
            })}
            className="form__select"
            options={options}
            placeholder="Выберите услугу"
            styles={customStyles}
          />
          <textarea
            className="form__input form__input_type_textarea"
            placeholder="Ваше сообщение"
          />
          <button type="button" className="form__button">
            Отправить
          </button>
        </form>
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
        <div className="animation"></div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default MakeAnOrder;
