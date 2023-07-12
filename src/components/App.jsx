/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-no-undef */
import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Main from "./Main";
import Footer from "./Footer";
// import OrderButton from "./OrderButton";
import LateralInfo from "./LateralInfo";
import Header from "./Header";
import MareTitle from "../images/Mare/MareTitle.jpg";
import LoresiTitle from "../images/Loresi/LoresiTitle.jpg";
import TeaTitle from "../images/Tea/TeaTitle.jpg";
import MareMobileTitle from "../images/Mare/MareMobileTitle.jpg";
import TeaMobileTitle from "../images/Tea/TeaMobileTitle.jpg";
import LoresiMobileTitle from "../images/Loresi/LoresiMobileTitle.jpg";
import ImagePreloader from "./ImagePreloader";
import Preloader from "./Preloader";

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
                      {/* <OrderButton /> */}
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
                    <Suspense fallback={<Preloader />}>
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
                    <Suspense fallback={<Preloader />}>
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
                    <Suspense fallback={<Preloader />}>
                      <Loresi3D />
                    </Suspense>
                  </motion.div>
                )}
              />
              <Route
                path="/make-an-order"
                element={(
                  <motion.div
                    className=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Suspense fallback={<Preloader />}>
                      <LateralInfo />
                      <MakeAnOrder />
                    </Suspense>
                  </motion.div>
                )}
              />
              <Route
                path="/prices"
                element={(
                  <motion.div
                    className=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Suspense fallback={<Preloader />}>
                      <LateralInfo />
                      <Prices />
                    </Suspense>
                  </motion.div>
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
                    <Suspense fallback={<Preloader />}>
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
