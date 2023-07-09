/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, lazy, Suspense, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Main from "./Main";
import Footer from "./Footer";
import OrderButton from "./OrderButton";
import LateralInfo from "./LateralInfo";
import Header from "./Header";

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
  const [mare3D, setMare3D] = useState(false);
  const [tea3D, setTea3D] = useState(false);
  const [loresi3D, setLoresi3D] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);
  useEffect(() => {
    setMare3D(location.pathname === "/mare3D");
    setTea3D(location.pathname === "/tea3D");
    setLoresi3D(location.pathname === "/loresi3D");
  }, [location]);

  const handleAppLoaded = () => {
    setAppLoaded(true);
  };
  useEffect(() => {
    window.addEventListener("load", handleAppLoaded);

    return () => {
      window.removeEventListener("load", handleAppLoaded);
    };
  }, []);

  if (!appLoaded) {
    // Display loading spinner or any other loading indicator here
    return <div>Loading...</div>;
  }
  return (
    <div>
      <AnimatePresence>
        <div className="page">
          {mare3D || tea3D || loresi3D ? null : <LateralInfo />}
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={(
                <motion.div
                  className="page__container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Header className="header" />
                  <Main />
                  <Footer />
                  <OrderButton />
                  <LoresiProject />
                  <MareProject />
                  <TeaProject />
                </motion.div>
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
                  <Suspense fallback={<h1>Loading...</h1>}><Mare3D /></Suspense>

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
                  <Suspense fallback={<h1>Loading...</h1>}><Tea3D /></Suspense>
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
                  <Suspense fallback={<h1>Loading...</h1>}><Loresi3D /></Suspense>
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
                  <Suspense fallback={<h1>Loading...</h1>}><MakeAnOrder /></Suspense>
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
                  <Suspense fallback={<h1>Loading...</h1>}><Prices /></Suspense>
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
                  <Suspense fallback={<h1>Loading...</h1>}><AboutMe /></Suspense>
                </motion.div>
                )}
            />
          </Routes>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
