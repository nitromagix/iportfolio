//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutData: {

    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    interests: "second section data",
    goals: "third section data",

  },
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {   
    setAboutData: (state, action) => {
      state.aboutData = {
        ...action.payload,
      };
    },
  },
});

export const { setAboutData } = aboutSlice.actions;

export const getAboutData = (state) => state.about.aboutData;

export default aboutSlice.reducer;

