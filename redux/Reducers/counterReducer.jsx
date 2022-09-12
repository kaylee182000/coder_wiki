import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

const counterReducer = createSlice({
  name: "counterReducer",
  initialState,
  reducers: {
    increment: (state, action) => {
      state = action.payload;
      return state;
    },
    decrement: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { increment, decrement } = counterReducer.actions;

export default counterReducer.reducer;
