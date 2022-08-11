//

import { createSlice } from "@reduxjs/toolkit";

import API_URL from "./api";

const initialState = {
  aboutData: {

    about: "",
    interests: "",
    goals: "",

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

export const updateContactDataThunk = (data) => {
  return async (dispatch, getState) => {
    const aboutData = data;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aboutData),
    };

    fetch(API_URL, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(setAboutData(aboutData));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export default aboutSlice.reducer;

