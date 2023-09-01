import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./pages/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
// import Preloader from "./components/Preloader";
import PreloadBackground from "./components/PreloadBackground/PreloadBackground";

const App = lazy(() => import("./components/App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<PreloadBackground />}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
