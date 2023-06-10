import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import OrderButton from "./OrderButton";
import MakeAnOrder from "./MakeAnOrder";
import LoresyProject from "./LoresyProject";
import MareProject from "./MareProject";
import PhotographerProject from "./PhotographerProject";
import LateralInfo from "./LateralInfo";

function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <div className="page scrollbar">
          <LateralInfo />
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
                  <LoresyProject />
                  <MareProject />
                  <PhotographerProject />
                </motion.div>
              )}
            />
            <Route path="/make-an-order" element={<MakeAnOrder />} />
          </Routes>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
