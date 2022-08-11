//

import { createSlice } from "@reduxjs/toolkit";

import API_URL from "./api";

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
    addProjectData: (state, action) => {
      state.portfolioData.push(action.payload);
    },
    updateProjectData: (state, action) => {
      const editedProject = action.payload;
      state.portfolioData = state.portfolioData.map((project, i) => {

        return project._id === editedProject._id ? editedProject : project
        
      })
    },
  },
});

export const { setPortfolioData, addProjectData, updateProjectData } = portfolioSlice.actions;

export const getPortfolioData = (state) => state.portfolio.portfolioData;

export const updatePortfolioDataThunk = (data) => {
  return async (dispatch, getState) => {
    const portfolioData = data;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(portfolioData),
    };

    fetch(`${API_URL}project/${portfolioData._id}`, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(updateProjectData(portfolioData));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export const addProjectDataThunk = (data) => {
  return async (dispatch, getState) => {
    const projectData = data;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    };

    fetch(`${API_URL}/project/`, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(addProjectData(projectData));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export const updateProjectDataThunk = (data) => {
  return async (dispatch, getState) => {
    const projectData = data;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    };

    fetch(API_URL, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(updateProjectData(projectData));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};
export default portfolioSlice.reducer;
