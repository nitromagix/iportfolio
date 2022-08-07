//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactData: {
    email: "email data",
    phone: "phone data",
    instagram: "instagram data",
    linkedin: "linkedin data",
    github: "github data",
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
