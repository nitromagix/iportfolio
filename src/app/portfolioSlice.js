//

import { createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3333/profiles/62f0547767da340acb25b9b2/";

const initialState = {
  portfolioData: [],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export const { setPortfolioData } = portfolioSlice.actions;

export const getPortfolioData = (state) => state.portfolio.portfolioData;

export const updatePortfolioDataThunk = (data) => {
  return async (dispatch, getState) => {
    const portfolioData = data;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(portfolioData),
    };

    fetch(API_URL, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(setPortfolioData(portfolioData));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};
export default portfolioSlice.reducer;
