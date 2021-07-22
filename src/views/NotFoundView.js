import React from "react";
import MainTemplate from "../templates/MainTemplate.js";

const NotFoundView = () => {
  return (
    <MainTemplate>
      <h1>404</h1>
      <p>Strona o podanym adresie nie istnieje</p>
    </MainTemplate>
  );
};

export default NotFoundView;
