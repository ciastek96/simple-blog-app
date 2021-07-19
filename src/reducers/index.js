import { combineReducers } from "redux";
import post from "./post";
import comment from "./comment";
import favorite from "./favorite";

export default combineReducers({
  post,
  comment,
  favorite,
});
