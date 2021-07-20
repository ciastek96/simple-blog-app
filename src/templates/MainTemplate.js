import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts, setFavorites } from "../actions/index";

const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(setFavorites());
  }, []);
  return <>{children}</>;
};

export default MainTemplate;
