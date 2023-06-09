import { createSlice } from "@reduxjs/toolkit";

const slideSlice = createSlice({
  name: "slide",
  initialState: {
    slide: false,
  },
  reducers: {
    toggleSlide(state) {
      state.slide = !state.slide;
    },
    slideClose(state) {
      state.slide = false;
    },
  },
});

export const { toggleSlide, slideClose } = slideSlice.actions;
export default slideSlice.reducer;
