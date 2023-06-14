// import React, { useState, useEffect } from "react";
// import LoresiTitle from "../images/LoresiTitle.jpg";
// import MarePortfolioTitle from "../images/MarePortfolioTitle.jpg";
// import MareTitle from "../images/MareTitle.jpg";
// import TeaTitle from "../images/TeaTitle.jpg";

// function Scroll3D() {
//   const [transforms, setTransforms] = useState([]);
//   const [top, setTop] = useState(0);
//   const [opacities, setOpacities] = useState([1, 1, 1]);
//   const [delta, setDelta] = useState(0);
//   const zSpacing = -5000;

//   useEffect(() => {
//     function handleScroll(event) {
//       const lastPos = zSpacing / 5;
//       setTop(top + event.deltaY * -0.5);
//       const newDelta = lastPos - (top + event.deltaY);
//       setDelta(newDelta);
//     }

//     window.addEventListener("wheel", handleScroll);
//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, [top]);

//   const frames = [
//     "asdfasfasf",
//     "123456778",
//     "ывывафавыафы",
//     LoresiTitle,
//     MarePortfolioTitle,
//   ];

//   useEffect(() => {
//     const newTransforms = [];
//     const newOpacities = [];

//     // eslint-disable-next-line no-plusplus
//     for (let i = 0; i < frames.length; i++) {
//       let zVal = i * zSpacing + zSpacing;
//       zVal += delta * -15.5;
//       const transform = `translateZ(${zVal}px)`;
//       newTransforms.push(transform);

//       const opacity = 1 - zVal / (Math.abs(zSpacing) * 1.5);
//       console.log(opacity);
//       let clampedOpacity = opacity > 1 ? opacity : 0;
//       if (i === 0) {
//         clampedOpacity = opacity > 1.5 ? opacity : 0;
//       }
//       newOpacities.push(clampedOpacity);
//     }

//     setTransforms(newTransforms);
//     setOpacities(newOpacities);
//   }, [delta]);

//   return (
//     <div className="scroll3D scroll3D__container">
//       <section className="scroll3D__gallery">
//         <div
//           className="scroll3D__frame"
//           style={{ transform: transforms[0], opacity: opacities[0] }}
//         >
//           <div className="frame__content">
//             <h2 className="scroll3D__frame-text">Mare</h2>
//           </div>
//         </div>
//         <div
//           className="scroll3D__frame"
//           style={{
//             transform: transforms[1],
//             opacity: opacities[1],
//           }}
//         >
//           <div className="frame__content">
//             <div
//               className="scroll3D__frame-media scroll3D__frame-media_left"
//               style={{ backgroundImage: `url(${LoresiTitle})` }}
//             />
//           </div>
//         </div>
//         <div
//           className="scroll3D__frame"
//           style={{
//             transform: transforms[2],
//             opacity: opacities[2],
//           }}
//         >
//           <div className="frame__content">
//             <div
//               className="scroll3D__frame-media scroll3D__frame-media_right"
//               style={{ backgroundImage: `url(${MarePortfolioTitle})` }}
//             />
//           </div>
//         </div>
//         <div
//           className="scroll3D__frame"
//           style={{
//             transform: transforms[3],
//             opacity: opacities[3],
//           }}
//         >
//           <div className="frame__content">
//             <div
//               className="scroll3D__frame-media scroll3D__frame-media_left"
//               style={{ backgroundImage: `url(${MareTitle})` }}
//             />
//           </div>
//         </div>
//         <div
//           className="scroll3D__frame"
//           style={{
//             transform: transforms[4],
//             opacity: opacities[4],
//           }}
//         >
//           <div className="frame__content">
//             <div
//               className="scroll3D__frame-media scroll3D__frame-media_right"
//               style={{ backgroundImage: `url(${TeaTitle})` }}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Scroll3D;

import React, { useState, useEffect } from "react";
import LoresiTitle from "../images/LoresiTitle.jpg";
import MarePortfolioTitle from "../images/MarePortfolioTitle.jpg";
import MareTitle from "../images/MareTitle.jpg";
import TeaTitle from "../images/TeaTitle.jpg";

function Scroll3D() {
  const [transforms, setTransforms] = useState([]);
  const [top, setTop] = useState(-700);
  const [opacities, setOpacities] = useState([1, 1, 1]);
  const [delta, setDelta] = useState(0);
  const zSpacing = -5000;

  useEffect(() => {
    function handleScroll(event) {
      const lastPos = zSpacing / 5;
      setTop((prevTop) => prevTop + event.deltaY * -0.5);
      const newDelta = lastPos - (top + event.deltaY);
      setDelta(newDelta);
    }

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [top]);

  const frames = [
    "asdfasfasf",
    "123456778",
    "ывывафавыафы",
    LoresiTitle,
    MarePortfolioTitle,
  ];

  useEffect(() => {
    const newTransforms = [];
    const newOpacities = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < frames.length; i++) {
      let zVal = i * zSpacing + zSpacing;
      zVal += delta * -15.5;
      const transform = `translateZ(${zVal}px)`;
      newTransforms.push(transform);

      const opacity = 1 - zVal / (Math.abs(zSpacing) * 1.5);
      let clampedOpacity = opacity > 1 ? opacity : 0;
      if (i === 0) {
        clampedOpacity = opacity > 1.5 ? opacity : 0;
      }
      newOpacities.push(clampedOpacity);
    }

    setTransforms(newTransforms);
    setOpacities(newOpacities);
  }, [delta]);

  return (
    <div className="scroll3D scroll3D__container">
      <section className="scroll3D__gallery">
        <div
          className="scroll3D__frame"
          style={{ transform: transforms[0], opacity: opacities[0] }}
        >
          <div className="frame__content">
            <h2 className="scroll3D__frame-text">Mare</h2>
          </div>
        </div>
        <div
          className="scroll3D__frame"
          style={{
            transform: transforms[1],
            opacity: opacities[1],
          }}
        >
          <div className="frame__content">
            <div
              className="scroll3D__frame-media scroll3D__frame-media_left"
              style={{ backgroundImage: `url(${LoresiTitle})` }}
            />
          </div>
        </div>
        <div
          className="scroll3D__frame"
          style={{
            transform: transforms[2],
            opacity: opacities[2],
          }}
        >
          <div className="frame__content">
            <div
              className="scroll3D__frame-media scroll3D__frame-media_right"
              style={{ backgroundImage: `url(${MarePortfolioTitle})` }}
            />
          </div>
        </div>
        <div
          className="scroll3D__frame"
          style={{
            transform: transforms[3],
            opacity: opacities[3],
          }}
        >
          <div className="frame__content">
            <div
              className="scroll3D__frame-media scroll3D__frame-media_left"
              style={{ backgroundImage: `url(${MareTitle})` }}
            />
          </div>
        </div>
        <div
          className="scroll3D__frame"
          style={{
            transform: transforms[4],
            opacity: opacities[4],
          }}
        >
          <div className="frame__content">
            <div
              className="scroll3D__frame-media scroll3D__frame-media_right"
              style={{ backgroundImage: `url(${TeaTitle})` }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Scroll3D;
