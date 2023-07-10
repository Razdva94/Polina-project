/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-no-undef */
import React, {} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Main from "./Main";
import Footer from "./Footer";
import OrderButton from "./OrderButton";
import LateralInfo from "./LateralInfo";
import Header from "./Header";
import MakeAnOrder from "./MakeAnOrder";
import Mare3D from "./Mare3D";
import Tea3D from "./Tea3D";
import LoresiProject from "./LoresiProject";
import MareProject from "./MareProject";
import TeaProject from "./TeaProject";
import Loresi3D from "./Loresi3D";
import Prices from "./Prices";
import AboutMe from "./AboutMe";
import MareTitle from "../images/Mare/MareTitle.jpg";
import LoresiTitle from "../images/Loresi/LoresiTitle.jpg";
import TeaTitle from "../images/Tea/TeaTitle.jpg";
import MareMobileTitle from "../images/Mare/MareMobileTitle.jpg";
import TeaMobileTitle from "../images/Tea/TeaMobileTitle.jpg";
import LoresiMobileTitle from "../images/Loresi/LoresiMobileTitle.jpg";
import ImagePreloader from "./ImagePreloader";

// const MakeAnOrder = lazy(() => import("./MakeAnOrder"));
// const Mare3D = lazy(() => import("./Mare3D"));
// const Tea3D = lazy(() => import("./Tea3D"));
// const LoresiProject = lazy(() => import("./LoresiProject"));
// const MareProject = lazy(() => import("./MareProject"));
// const TeaProject = lazy(() => import("./TeaProject"));
// const Loresi3D = lazy(() => import("./Loresi3D"));
// const Prices = lazy(() => import("./Prices"));
// const AboutMe = lazy(() => import("./AboutMe"));

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
            {/* {mare3D || tea3D || loresi3D ? null : <LateralInfo />} */}
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={(
                  <><LateralInfo /><motion.div
                    className="page__container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Header images={imagesToPreloadHeader} className="header" />
                    <Main />
                    <Footer />
                    <OrderButton />
                    <LoresiProject />
                    <MareProject />
                    <TeaProject />
                  </motion.div></>
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
                    <Mare3D />
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
                    <Tea3D />
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
                    <Loresi3D />
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
                    <LateralInfo />
                    <MakeAnOrder />
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
                    <LateralInfo />
                    <Prices />
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
                    <LateralInfo />
                    <AboutMe />
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
