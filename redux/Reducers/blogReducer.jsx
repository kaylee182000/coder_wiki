import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrBlog: [],
  blogDetail: {},
};

const blogReducer = createSlice({
  name: "blogReducer",
  initialState,
  reducers: {
    getBlog: (state, action) => {
      const arrBlog = action.payload;
      state.arrBlog = arrBlog;
    },
  },
});

export const { getBlog } = blogReducer.actions;

export default blogReducer.reducer;

export const getBlogApi = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const action = getBlog(data);
    dispatch(action);
  };
};
