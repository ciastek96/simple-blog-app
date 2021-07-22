import { combineReducers } from "redux";
import post from "./post";
import comment from "./comment";
import favorite from "./favorite";
import user from "./user";

export default combineReducers({
  post,
  comment,
  favorite,
  user,
});
