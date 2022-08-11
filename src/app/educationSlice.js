//

import { createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3333/profiles/62f0547767da340acb25b9b2";


const initialState = {
  educationData: {
    education: "",
    education1: "",
    experience: "",
    experience1: "",
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

export const updateEducationDataThunk = (data) => {
  return async (dispatch, getState) => {
    const educationData = data;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(educationData),
    };

    fetch(API_URL, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(setEducationData(educationData));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export default educationSlice.reducer;