import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    email: "email data",
    phone: "phone data",
    instagram: "instagram data",
    facebook: "facebook data",
    github: "github data",

};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setContactData: (state, action) => {
      state.value = {

          ...action.payload,

      };
      console.log(state.value);
    },
  },
});

export const { setContactData } = contactSlice.actions;

export const getContactData = (state) => state.contact;

export default contactSlice.reducer;
