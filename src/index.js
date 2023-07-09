import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./pages/index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

const App = lazy(() => import("./components/App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<p>Loading...</p>}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
