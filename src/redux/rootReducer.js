import { combineReducers } from "redux";

import blogReducer from "./slices/blogSlice";

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
