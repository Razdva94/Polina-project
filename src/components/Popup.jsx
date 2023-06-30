import React from "react";

function Popup({ regectMessage }) {
  return (
    <div className="popup popup_opened">
      <div className="popup__container">
        <p className="popup__text">
          {regectMessage ? "Что-то пошло не так!" : "Заявка отправлена!"}
        </p>
      </div>
    </div>
  );
}

export default Popup;
