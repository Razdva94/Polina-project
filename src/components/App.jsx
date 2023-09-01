/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-no-undef */
import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

  return (
    <ImagePreloader images={imagesToPreloadHeader}>
      <div>
        <AnimatePresence>
          <div className="page">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={(
                  <>
                    <LateralInfo />
                    <motion.div
                      className="page__container"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Header
                        images={imagesToPreloadHeader}
                        className="header"
                      />
                      <Main />
                      <Footer />
                      <LoresiProject />
                      <MareProject />
                      <TeaProject />
                    </motion.div>
                  </>
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
                    <Suspense fallback={<PreloadBackground />}>
                      <LateralInfo />
                      <MakeAnOrder />
                    </Suspense>
                  </div>
                )}
              />
              <Route
                path="/prices"
                element={(
                  <div>
                    <Suspense fallback={<PreloadBackground />}>
                      <LateralInfo />
                      <Prices />
                    </Suspense>
                  </div>
                )}
              />
              <Route
                path="/about-me"
                element={(
                  <motion.div
                    className=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Suspense fallback={<PreloadBackground />}>
                      <LateralInfo />
                      <AboutMe />
                    </Suspense>
                  </motion.div>
                )}
              />
            </Routes>
          </div>
        </AnimatePresence>
      </div>
    </ImagePreloader>
  );
}

export default App;
