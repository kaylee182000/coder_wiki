import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./Reducers/blogReducer";
import counterReducer from "./Reducers/counterReducer";

export default configureStore({
  reducer: {
    counterReducer: counterReducer,
    blogReducer: blogReducer,
  },
});
