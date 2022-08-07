import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modalReducer from './modalSlice';
import contactReducer from './contactSlice';
import homeReducer from './homeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    home: homeReducer,
    contact: contactReducer
  },
});
