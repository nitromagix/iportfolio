import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { text: "test" },
  status: "idle",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setText: (state, action) => {
      state.value = {
        ...state.value,
        text: action.payload,
      };
    },
  },
});

export const { setText } = modalSlice.actions;

export const selectText = (state) => state.modal.value.text;

export default modalSlice.reducer;
