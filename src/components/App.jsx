import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import LateralInfo from "./LateralInfo";
import OrderButton from "./OrderButton";
import MakeAnOrder from "./MakeAnOrder";
import LoresyProject from "./LoresyProject";
import MareProject from "./MareProject";
import PhotographerProject from "./PhotographerProject";

function App() {
  return (
    <div className="page scrollbar">
      <LateralInfo />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="page__container">
              <Header className="header" />
              <Main />
              <Footer />
              <OrderButton />
              <LoresyProject />
              <MareProject />
              <PhotographerProject />
            </div>
          )}
        />
        <Route path="/make-an-order" element={<MakeAnOrder />} />
      </Routes>
    </div>
  );
}

export default App;
