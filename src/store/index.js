import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./slideSlice";
import portfolioReducer from "./portfolioSlice";

export default configureStore({
  reducer: {
    slide: slideReducer,
    portfolio: portfolioReducer
  },
});
