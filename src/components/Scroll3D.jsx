/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Scroll3D({ frames }) {
  const navigate = useNavigate();
  const [transforms, setTransforms] = useState([]);
  const [top, setTop] = useState(-1500); // top - текущая вертикальная позиция,
  // с учетом прокрутки, с помощью нее задаем ограничения и трансформируем скролл по Y в Z
  const [opacities, setOpacities] = useState([1, 1, 1]);
  const [delta, setDelta] = useState(0);
  const zSpacing = -7000; // zSpacing - расстояние между кадрами на оси

  useEffect(() => { // Этот хук служит для преобразования скролла по оси Y в трансформацию галереи по оси Z;
    function handleScroll(event) {
      // initPos - изначальное позиционирование элементов, влияет на диапозон прокрутки
      const initPos = zSpacing / 5;
      setTop((prevTop) => prevTop + event.deltaY * 2); // задаем скорость прокрутки
      const newDelta = initPos - (top + event.deltaY); // преобразуем вертикальное движение по оси Y, в движение по оси Z
      setDelta(newDelta);
      if (top > 2400) { // задаем ограничения по скроллу, чтобы галерея не уходила в бесконечность
        setTop(2400);
      }
      if (top < -1500) {
        setTop(-1500);
      }
    }

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [top]);

  useEffect(() => {
    const newTransforms = [];
    const newOpacities = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < frames.length; i++) {
      let zVal = i * zSpacing + zSpacing; // zVal, этой переменной определяем изначальное положение каждого элемента frames (его глубину)
      zVal += delta * -15.5; // изменение zVal при прокрутке
      const transform = `translateZ(${zVal * 0.9}px)`; // переменная для новых значений карточки
      newTransforms.push(transform); // Каждый элемент массива соответсвует карточке по индексу,
      // таким образом отслеживаем изменение каждой карточки при скролле и добавляем

      const opacity = 1 - zVal / (Math.abs(zSpacing) * 1.5);
      let clampedOpacity = opacity > 1.7 ? opacity : 0; // настройка исчезания карточки, при определенном значении прокрутки,
      // карточка должна счесзать, чтобы не закрывать остальные карточки
      if (i === 0) {
        clampedOpacity = opacity > 1.5 ? opacity : 0;
      }
      newOpacities.push(clampedOpacity);
    }

    setTransforms(newTransforms);
    setOpacities(newOpacities);
  }, [delta]);

  function handleCross() {
    navigate("/");
  }
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        navigate("/");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);
  return (
    <>
      <p className="scroll3D__text">USE SCROLL</p>
      <div className="scroll3D__cross" onClick={handleCross}></div>
      <div className="scroll3D scroll3D__container">
        <section className="scroll3D__gallery">
          {frames.map((frame, index) => (
            <div
              className="scroll3D__frame"
              style={{
                transform: transforms[index],
                opacity: opacities[index],
              }}
              key={frame.id}
            >
              <div className="frame__content">
                <div
                  className={`scroll3D__frame-media ${frame.mediaClass}`}
                  style={{ backgroundImage: `url(${frame.image})` }}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Scroll3D;
