import React, { useState } from "react";
import Select from "react-select";
import Footer from "./Footer";
import api from "../utils/api";
import Popup from "./Popup";

const options = [
  { value: "1", label: "Фирменный стиль" },
  { value: "2", label: "Логотип" },
  { value: "3", label: "Полиграфия" },
  { value: "4", label: "Другое" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    border: state.isFocused ? "1px solid white" : "1px solid grey",
    height: "50px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: "0",
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

const MakeAnOrder = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [popupState, setPopupState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [regectMessage, setRegectMessage] = useState(false);

  function openPopup() {
    setTimeout(() => setPopupState(false), 2000);
  }
  function handleSelectChange(option) {
    setSelectedOption(option);
  }
  function deliverMessage(e) {
    e.preventDefault();
    const userInput = e.target.elements.user.value;
    const emailInput = e.target.elements.email.value;
    const selectInput = selectedOption ? selectedOption.label : "";
    const textInput = e.target.elements.text.value;
    setLoading(true);
    api
      .postCardToServer(userInput, emailInput, selectInput, textInput)
      .then(() => {
        setRegectMessage(false);
        setPopupState(true);
        openPopup();
      })
      .catch((err) => {
        console.log(err);
        setRegectMessage(true);
        setPopupState(true);
        openPopup();
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="page__container">
      <div className="order">
        <h2 className="order__header" id="make-an-order">
          Оформить заказ
        </h2>
        <div className="order__container">
          <form className="form" onSubmit={deliverMessage}>
            <input
              type="text"
              minLength="2"
              maxLength="30"
              className="form__input"
              placeholder="Ваше имя"
              required
              name="user"
            />
            <input
              type="email"
              minLength="2"
              maxLength="30"
              className="form__input"
              placeholder="E-mail"
              required
              name="email"
            />
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
              required
              options={options}
              placeholder="Выберите услугу"
              styles={customStyles}
              name="select"
              onChange={handleSelectChange}
              value={selectedOption}
            />
            <textarea
              name="text"
              className="form__input form__input_type_textarea"
              placeholder="Ваше сообщение"
            />
            <button type="submit" className="form__button">
              {loading ? "Отправление..." : "Отправить"}
            </button>
          </form>
          <div className="contacts">
            <h2 className="form__subtitle">Связь со мной</h2>
            <a
              href="https://t.me/polinam_design"
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
          </div>
        </div>
        <div className="animation"></div>
      </div>
      <Footer />
      {popupState ? <Popup regectMessage={regectMessage} /> : ""}
    </div>
  );
};

export default React.memo(MakeAnOrder);
