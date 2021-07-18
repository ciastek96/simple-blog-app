import React from "react";
import { useParams } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate.js";

const DetailsView = () => {
  let { id } = useParams();
  return (
    <MainTemplate>
      <h1>Details View</h1>
      <h2>ID: {id}</h2>
    </MainTemplate>
  );
};

export default DetailsView;
