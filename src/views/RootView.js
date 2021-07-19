import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions";
import MainTemplate from "../templates/MainTemplate.js";
import Posts from "../components/Posts/Posts";
import Header from "../components/Header/Header";

const RootView = () => {
  return (
    <MainTemplate>
      <Header>simple blog.</Header>
      <Posts />
    </MainTemplate>
  );
};

export default RootView;
