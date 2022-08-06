import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "email data",
    phone: "phone data",
    instagram: "instagram data",
    facebook: "facebook data",
    github: "github data",
  },
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setContactData: (state, action) => {
      console.log(action.payload);
      state.value = {
        ...action.payload,
      };
      console.log(state);
    },
  },
});

export const { setContactData } = contactSlice.actions;

export const getContactData = (state) => state.contact.value;

export default contactSlice.reducer;
