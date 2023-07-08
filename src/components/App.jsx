import React from "react";
/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-no-undef */
// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
// import OrderButton from "./OrderButton";
// import LateralInfo from "./LateralInfo";
// import MakeAnOrder from "./MakeAnOrder";
// import Mare3D from "./Mare3D";
// import Tea3D from "./Tea3D";
// import LoresyProject from "./LoresyProject";
// import MareProject from "./MareProject";
// import TeaProject from "./TeaProject";
// import Loresi3D from "./Loresi3D";
// import Prices from "./Prices";
// import AboutMe from "./AboutMe";

function App() {
  // const location = useLocation();
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [mare3D, setMare3D] = useState(false);
  // const [tea3D, setTea3D] = useState(false);
  // const [loresi3D, setLoresi3D] = useState(false);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setIsLoaded(true);
  //   };

  //   window.addEventListener("load", handleLoad);

  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  // useEffect(() => {
  //   setMare3D(location.pathname === "/mare3D");
  //   setTea3D(location.pathname === "/tea3D");
  //   setLoresi3D(location.pathname === "/loresi3D");
  // }, [location]);

  return (
    <AnimatePresence>
      <div>здарова</div>
    </AnimatePresence>
  );
  // {isLoaded && (
  //     <div className={tea3D ? "" : "page scrollbar"}>
  //       {mare3D || tea3D || loresi3D ? null : <LateralInfo />}
  //       <Routes location={location} key={location.pathname}>
  //         <Route
  //           path="/"
  //           element={(
  //             <motion.div
  //               className="page__container"
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{ duration: 0.7 }}
  //             >
  //               <Header className="header" />
  //               <Main />
  //               <Footer />
  //               <OrderButton />
  //               <LoresyProject />
  //               <MareProject />
  //               <TeaProject />
  //             </motion.div>
  //           )}
  //         />
  //         <Route
  //           path="/mare3D"
  //           element={(
  //             <motion.div
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{ duration: 0.8 }}
  //             >
  //               <Mare3D />
  //             </motion.div>
  //           )}
  //         />
  //         <Route
  //           path="/tea3D"
  //           element={(
  //             <motion.div
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{ duration: 0.8 }}
  //             >
  //               <Tea3D />
  //             </motion.div>
  //           )}
  //         />
  //         <Route
  //           path="/loresi3D"
  //           element={(
  //             <motion.div
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{ duration: 0.8 }}
  //             >
  //               <Loresi3D />
  //             </motion.div>
  //           )}
  //         />
  //         <Route
  //           path="/make-an-order"
  //           element={(
  //             <motion.div
  //               className=""
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{ duration: 0.5 }}
  //             >
  //               <MakeAnOrder />
  //             </motion.div>
  //           )}
  //         />
  //         <Route
  //           path="/prices"
  //           element={(
  //             <motion.div
  //               className=""
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{ duration: 0.5 }}
  //             >
  //               <Prices />
  //             </motion.div>
  //           )}
  //         />
  //         <Route
  //           path="/about-me"
  //           element={(
  //             <motion.div
  //               className=""
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{ duration: 0.5 }}
  //             >
  //               <AboutMe />
  //             </motion.div>
  //           )}
  //         />
  //       </Routes>
  //     </div>
  //   )}
}

export default App;
