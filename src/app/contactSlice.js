//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactData: {
    email: "martinprost@gmail.com",
    phone: "424.209.8902",
    instagram: "instagram data",
    linkedin: "www.linkedin.com/in/martinprost",
    github: "https://github.com/nitromagix",
  },
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContactData: (state, action) => {
      state.contactData = {
        ...action.payload,
      };
    },
  },
});

export const { setContactData } = contactSlice.actions;

export const getContactData = (state) => state.contact.contactData;

export default contactSlice.reducer;
