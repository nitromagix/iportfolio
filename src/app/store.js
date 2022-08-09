//

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import aboutSlice from "./aboutSlice";
import educationSlice from "./educationSlice"

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = configureStore(
  {
    reducer: {
      about: aboutSlice,
      education: educationSlice,
    },
  },
  composedEnhancer
);
