import React from "react";
import MainTemplate from "../templates/MainTemplate.js";
import Posts from "../components/Posts/Posts";
import Header from "../components/Header/Header";

const RootView = () => {
  return (
    <MainTemplate>
      <Header path="/">simple blog.</Header>
      <Posts />
    </MainTemplate>
  );
};

export default RootView;
