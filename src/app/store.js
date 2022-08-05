import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modalReducer from './modalSlice';
import contactSlice from './contactSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    contact: contactSlice
  },
});
