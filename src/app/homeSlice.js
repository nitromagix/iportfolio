//

import { createSlice } from "@reduxjs/toolkit";

import API_URL from "./api";

const initialState = {
  homeData: {
    introduction: "Welcome to YOUR portfolio site!",
    description:
      "Use this site to tell your unique story. All sections are customizable!",
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

export const updateHomeDataThunk = (data) => {
  return async (dispatch, getState) => {
    const homeData = data;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(homeData),
    };

    fetch(API_URL, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }
        
        dispatch(setHomeData(homeData))
  
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }
}

export default homeSlice.reducer;
