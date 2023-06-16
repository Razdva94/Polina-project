import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./slideSlice";
import portfolioReducer from "../spare_components/portfolioSlice";
import mobileSlideReducer from "../spare_components/mobileSlideSlice";

export default configureStore({
  reducer: {
    slide: slideReducer,
    mobileSlide: mobileSlideReducer,
    portfolio: portfolioReducer
  },
});
