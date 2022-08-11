//

import { createSlice } from "@reduxjs/toolkit";

import API_URL from "./api";

const initialState = {
  experienceData: [],
};

export const experienceSlice = createSlice({
  name: "experience",
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

export const updateContactDataThunk = (data) => {
  return async (dispatch, getState) => {
    const experienceData = data;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(experienceData),
    };

    fetch(API_URL, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(setExperienceData(experienceData));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export default experienceSlice.reducer;
