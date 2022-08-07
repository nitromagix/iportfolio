//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeData: {
    introduction: "Welcome to YOUR custom portfolio site!",
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