//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolioData: [],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolioData: (state, action) => {
      state.portfolioData = Object.values(action.payload);
    },
  },
});

export const { setPortfolioData } = portfolioSlice.actions;

export const getPortfolioData = (state) => state.portfolio.portfolioData;

export default portfolioSlice.reducer;
