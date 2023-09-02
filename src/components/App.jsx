/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-no-undef */
import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Main from "./Main";
import Footer from "./Footer";
import LateralInfo from "./LateralInfo";
import Header from "./Header";
import MareTitle from "../images/Mare/MareTitle_15_11zon.webp";
import LoresiTitle from "../images/Loresi/LoresiTitle_2_11zon.webp";
import TeaTitle from "../images/Tea/TeaTitle_27_11zon.webp";
import MareMobileTitle from "../images/Mare/MareMobileTitle_16_11zon.webp";
import TeaMobileTitle from "../images/Tea/TeaMobileTitle_28_11zon.webp";
import LoresiMobileTitle from "../images/Loresi/LoresiMobileTitle.webp";
import ImagePreloader from "./ImagePreloader";
// import Preloader from "./Preloader";
import PreloadBackground from "./PreloadBackground/PreloadBackground";
import Italiana from "../vendor/fonts/Italiana-Regular.woff2";
import CenturyGothic from "../vendor/fonts/CenturyGothic.woff2";

const MakeAnOrder = lazy(() => import("./MakeAnOrder"));
const Mare3D = lazy(() => import("./Mare3D"));
const Tea3D = lazy(() => import("./Tea3D"));
const LoresiProject = lazy(() => import("./LoresiProject"));
const MareProject = lazy(() => import("./MareProject"));
const TeaProject = lazy(() => import("./TeaProject"));
const Loresi3D = lazy(() => import("./Loresi3D"));
const Prices = lazy(() => import("./Prices"));
const AboutMe = lazy(() => import("./AboutMe"));

function App() {
  const location = useLocation();
  const imagesToPreloadHeader = [
    MareTitle,
    TeaTitle,
    LoresiTitle,
    MareMobileTitle,
    TeaMobileTitle,
    LoresiMobileTitle,
  ];

  useEffect(() => {
    async function loadFont(fontUrl) {
      try {
        const font = new FontFace(
          "CustomFont",
          `url(${fontUrl}) format('woff2')`,
          {
            weight: 400,
          }
        );

        await font.load();
        document.fonts.add(font);
      } catch (error) {
        console.error("Error loading font:", error);
      }
    }

    async function loadFonts() {
      try {
        await Promise.all([loadFont(CenturyGothic), loadFont(Italiana)]);

        // Теперь можно установить стили для текста
        document.body.style.fontFamily = "CustomFont, sans-serif, Unbounded, Inter, ProsoOne";
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    }
    loadFonts();
  }, []);

  return (
    <div>
      <div className="page">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={(
              <ImagePreloader images={imagesToPreloadHeader}>
                <LateralInfo />
                <div
                  className="page__container"
                >
                  <Header images={imagesToPreloadHeader} className="header" />
                  <Main />
                  <Footer />
                  <LoresiProject />
                  <MareProject />
                  <TeaProject />
                </div>
              </ImagePreloader>
              )}
          />

          <Route
            path="/mare3D"
            element={(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Suspense fallback={<PreloadBackground />}>
                  <Mare3D />
                </Suspense>
              </motion.div>
              )}
          />
          <Route
            path="/tea3D"
            element={(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Suspense fallback={<PreloadBackground />}>
                  <Tea3D />
                </Suspense>
              </motion.div>
              )}
          />
          <Route
            path="/loresi3D"
            element={(
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Suspense fallback={<PreloadBackground />}>
                  <Loresi3D />
                </Suspense>
              </motion.div>
              )}
          />
          <Route
            path="/make-an-order"
            element={(
              <div>
                <LateralInfo />
                <MakeAnOrder />
              </div>
              )}
          />
          <Route
            path="/prices"
            element={(
              <div>
                <LateralInfo />
                <Prices />
              </div>
              )}
          />
          <Route
            path="/about-me"
            element={(
              <div>
                <LateralInfo />
                <AboutMe />
              </div>
              )}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
