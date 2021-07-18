import React from "react";
import MainTemplate from "../templates/MainTemplate.js";
import Posts from "../components/Posts/Posts";

const RootView = () => (
  <MainTemplate>
    <h1>Root View</h1>
    <Posts />
  </MainTemplate>
);

export default RootView;
