//

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import counterReducer from "../features/counter/counterSlice";
import modalReducer from "./modalSlice";
import contactReducer from "./contactSlice";
import homeReducer from "./homeSlice";
import userReducer from "./userSlice";
import experienceReducer from "./experienceSlice";
import portfolioReducer from "./portfolioSlice";
import { logger } from "./logger";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      modal: modalReducer,
      home: homeReducer,
      contact: contactReducer,
      user: userReducer,
      experience: experienceReducer,
      portfolio: portfolioReducer,
    },
    middleware: [logger],
  },
  composedEnhancer
);
