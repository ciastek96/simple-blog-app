import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/index";

const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return <div>{children}</div>;
};

export default MainTemplate;
