import { createSlice } from "@reduxjs/toolkit";

export const STATE_KEY = "blog";

const initialState = {
  allBlogs: "kkfk",
};

export const blogSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    setAllBlogs: (state, action) => {
      const { allBlogs } = action.payload;
      state.allBlogs = allBlogs;
    },
  },
});

export const { setAllBlogs } = blogSlice.actions;

export const getAllBlogs = (state) => state.blog.allBlogs;

export default blogSlice.reducer;
