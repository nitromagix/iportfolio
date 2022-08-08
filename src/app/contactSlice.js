//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactData: {
    email: "",
    phone: "",
    instagram: "",
    linkedin: "",
    github: "",
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
