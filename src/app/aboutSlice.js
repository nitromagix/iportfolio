//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aboutData: {
    firstSection: "asdfasd asdf asdf asdfa sasdf asdasdfas dfas dasdf asdf asdf asdf  asdfasdf asasdfa sdfasdf as d fasdf sadas dasd asf asdfs",
    secondSection: "second section data",
    thirdSection: "third section data",
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
