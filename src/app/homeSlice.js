//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeData: {
    introduction: "Welcome to YOUR portfolio site!",
    description: "Use this site and tell your unique story. All sections are customizable!",
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      state.homeData = {
        ...action.payload,
      };
    },
  },
});

export const { setHomeData } = homeSlice.actions;

export const getHomeData = (state) => state.home.homeData;

export default homeSlice.reducer;
