/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Scroll3D({ frames }) {
  const navigate = useNavigate();
  const [transforms, setTransforms] = useState([]);
  const [top, setTop] = useState(-1500);
  const [opacities, setOpacities] = useState([1, 1, 1]);
  const [delta, setDelta] = useState(0);
  const zSpacing = -7000;

  useEffect(() => {
    function handleScroll(event) {
      const lastPos = zSpacing / 5;
      setTop((prevTop) => prevTop + event.deltaY * 2);
      const newDelta = lastPos - (top + event.deltaY);
      setDelta(newDelta);
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
      let zVal = i * zSpacing + zSpacing;
      zVal += delta * -15.5;
      const transform = `translateZ(${zVal * 0.9}px)`;
      newTransforms.push(transform);

      const opacity = 1 - zVal / (Math.abs(zSpacing) * 1.5);
      let clampedOpacity = opacity > 1.7 ? opacity : 0;
      if (i === 0) {
        clampedOpacity = opacity > 1.5 ? opacity : 0;
      }
      newOpacities.push(clampedOpacity);
    }

    setTransforms(newTransforms);
    setOpacities(newOpacities);
  }, [delta]);

  function handleOverlay() {
    navigate("/Polina-project");
  }
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        navigate("/Polina-project");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);
  return (
    <div className="scroll3D scroll3D__container" onClick={handleOverlay}>
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
  );
}

export default Scroll3D;
