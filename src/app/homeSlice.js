//

import { createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3333/profiles/62f0547767da340acb25b9b2/";

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

    console.log(homeData);
  
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

export const updateHomeDataT = async (dispatch, getState) => {
  let state = getState();

  const homeData = state.home.homeData;

  console.log(homeData);

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(homeData),
  };

  // const response = await fetch(API_URL);
  // const responseJson = await response.json();
  // console.log(responseJson);

  fetch(API_URL, requestOptions)
    .then(async (response) => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        console.log(error);
        return Promise.reject(error);
      }


      // setPostId(data.id);
    })
    .catch((error) => {
      // setErrorMessage(error);
      console.error("There was an error!", error);
    });
};



export default homeSlice.reducer;
