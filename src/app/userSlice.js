//

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: "",
    name: "",
    photo: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = {
        ...action.payload
      };
    },
  },
});

export const { setUserData } = userSlice.actions;

export const getUserData = (state) => state.user.userData;

export default userSlice.reducer;
