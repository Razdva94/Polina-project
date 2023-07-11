import React from "react";
import Footer from "./Footer";
import Polina from "../images/Polinochka.jpg";

function AboutMe() {
  return (
    <>
      <div
        className="page__container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <span className="about-me">
          <h2 className="about-me__header">Обо мне</h2>
          <img className="about-me__image" src={Polina} alt="Polina"></img>
          {/* <h2 style={{ fontWeight: 100, marginTop: 0, marginBottom: "35px" }}>
            Обо&nbsp;мне&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2> */}
          <h1 style={{ marginBottom: "35px", marginTop: "0", fontFamily: "ProstoOne", fontWeight: "100" }}>Маишева Полина</h1>
          <p style={{ marginTop: 0 }}>
            Привет! Меня зовут Полина, мне 26 и я Ваш бренд-дизайнер.
          </p>
          <p>
            В мире графического дизайна я нахожу свое вдохновение и возможность
            выразить свою индивидуальность через каждый проект. Мои навыки и
            опыт позволяют мне создавать эффективные дизайны, отражающие
            философию бренда и привлекающие внимание.
          </p>
          <p>
            Я уверена, что грамотно созданный дизайн способен передать нужные
            сообщения и выстроить правильную коммуникацию между брендом и
            аудиторией. Поэтому я стараюсь вникнуть в задачу и потребности,
            чтобы создать для каждого клиента индивидуальное решение.
          </p>
          <p>
            Я открыта для новых проектов и возможностей сотрудничества. Если вы
            ищете творческого и ответственного графического дизайнера, готового
            превратить вашу идею в визуальную реальность, я готова Вам помочь.
          </p>
          <p>Свяжитесь со мной, и мы вместе создадим нечто удивительное!</p>
        </span>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;
