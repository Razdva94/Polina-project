import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import LateralInfo from "./LateralInfo";
import OrderButton from "./OrderButton";
// import ScrollShiftHeader from "./ScrollShiftHeader";

function App() {
  return (
    <div className="page">
      <LateralInfo />
      <div className="page__container">
        <Header className="header" />
        <Main />
        <Footer />
        <OrderButton />
        {/* <ScrollShiftHeader /> */}
      </div>
    </div>
  );
}

export default App;
