//

import { createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3333/profiles/62f0547767da340acb25b9b2/";

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

export const updateContactDataThunk = (data) => {
  return async (dispatch, getState) => {
    const contactData = data;

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    };

    fetch(API_URL, requestOptions)
      .then(async (response) => {
        const res = await response.json();

        if (!response.ok) {
          const error = (res && res.message) || response.status;
          console.log(error);
          return Promise.reject(error);
        }

        dispatch(setContactData(contactData));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export default contactSlice.reducer;
