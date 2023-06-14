// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
// import OrderButton from "./OrderButton";
// import LoresyProject from "./LoresyProject";
// import MareProject from "./MareProject";
// import PhotographerProject from "./PhotographerProject";
// import LateralInfo from "./LateralInfo";
// import Scroll3D from "./Scroll3D";

// function App() {
//   const location = useLocation();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const handleLoad = () => {
//       setIsLoaded(true);
//     };

//     window.addEventListener("load", handleLoad);

//     return () => {
//       window.removeEventListener("load", handleLoad);
//     };
//   }, []);

//   return (
//     <AnimatePresence>
//       {isLoaded && (
//         <div className="page scrollbar">
//           <LateralInfo />
//           <Routes location={location} key={location.pathname}>
//             <Route
//               path="/"
//               element={(
//                 <motion.div
//                   className="page__container"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.7 }}
//                 >
//                   <Header className="header" />
//                   <Main />
//                   <Footer />
//                   <OrderButton />
//                   <LoresyProject />
//                   <MareProject />
//                   <PhotographerProject />
//                 </motion.div>
//               )}
//             />
//             <Route path="/make-an-order" element={<Scroll3D />} />
//           </Routes>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import OrderButton from "./OrderButton";
import LateralInfo from "./LateralInfo";
import Scroll3D from "./Scroll3D";
import MakeAnOrder from "./MakeAnOrder";

function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scroll3D, setScroll3D] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    setScroll3D(location.pathname === "/scroll3D");
  }, [location]);

  return (
    <AnimatePresence>
      {isLoaded && (
        <div className={scroll3D ? "" : "page scrollbar"}>
          {scroll3D ? null : <LateralInfo />}
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
                </motion.div>
              )}
            />
            <Route
              path="/scroll3D"
              element={(
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Scroll3D />
                </motion.div>
              )}
            />
            <Route
              path="/make-an-order"
              element={(
                <motion.div
                  className="page__container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <MakeAnOrder />
                </motion.div>
              )}
            />
          </Routes>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
