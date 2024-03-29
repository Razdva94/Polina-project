import React from "react";
import Footer from "./Footer";
import Polina from "../images/Polinochka_35_11zon.webp";

function AboutMe() {
  return (
    <>
      <div
        className="page__container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span className="about-me">
          <h2 className="about-me__header" id="about-me">
            ОБО МНЕ
          </h2>
          <img className="about-me__image" src={Polina} alt="Polina"></img>
          <h1
            style={{
              marginBottom: "35px",
              marginTop: "0",
              fontFamily: "ProstoOne",
              fontWeight: "100",
            }}
          >
            Антонова Полина
          </h1>
          <p style={{ marginTop: 0 }}>
            Привет! Меня зовут Полина, мне 26 и я Ваш бренд-дизайнер.
          </p>
          <p>
            В мире графического дизайна я нахожу своё вдохновение и возможность
            выразить свою индивидуальность через каждый проект. Мои навыки и
            опыт позволяют мне создавать эффективные дизайны, отражающие
            философию бренда и&nbsp;привлекающие внимание.
          </p>
          <p>
            Я уверена, что грамотно созданный дизайн способен передать нужные
            сообщения и выстроить правильную коммуникацию между брендом
            и&nbsp;аудиторией. Поэтому я стараюсь вникнуть в задачу и
            потребности, чтобы создать для каждого клиента индивидуальное
            решение.
          </p>
          <p>
            Я открыта для новых проектов и возможностей сотрудничества. Если вы
            ищете творческого и&nbsp;ответственного графического дизайнера,
            готового превратить вашу идею в визуальную реальность, я&nbsp;готова
            Вам помочь.
          </p>
          <p>Свяжитесь со мной, и мы вместе создадим нечто удивительное!</p>
        </span>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
