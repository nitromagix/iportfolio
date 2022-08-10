//

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import aboutSlice from "./aboutSlice";
import educationSlice from "./educationSlice"
import counterReducer from "../features/counter/counterSlice";
import contactReducer from "./contactSlice";
import homeReducer from "./homeSlice";
import userReducer from "./userSlice";
import experienceReducer from "./experienceSlice";
import portfolioReducer from "./portfolioSlice";

import { consoleLogger } from "./consoleLogger";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = configureStore(
  {
    reducer: {
      about: aboutSlice,
      education: educationSlice,
      counter: counterReducer,
      home: homeReducer,
      contact: contactReducer,
      user: userReducer,
      experience: experienceReducer,
      portfolio: portfolioReducer,
    },
    // middleware: [consoleLogger],
  },
  composedEnhancer
);
