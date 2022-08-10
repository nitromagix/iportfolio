//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  educationData: {
    education: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    education1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    experience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
};

export const educationSlice = createSlice({
  name: "eduaction",
  initialState,
  reducers: {   
    setEducationData: (state, action) => {
      state.educationData = {
        ...action.payload,
      };
    },
  },
});

export const { setEducationData } = educationSlice.actions;

export const getEducationData = (state) => state.education.educationData;

export default educationSlice.reducer;