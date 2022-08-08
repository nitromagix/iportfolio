//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experienceData: [],
};

export const experienceSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setExperienceData: (state, action) => {
      state.experienceData = {
        ...action.payload,
      };
    },
  },
});

export const { setExperienceData } = experienceSlice.actions;

export const getExperienceData = (state) => state.experience.experienceData;

export default experienceSlice.reducer;
