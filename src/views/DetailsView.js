import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate.js";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Comments from "../components/Comments/Comments";
import { routes } from "../routes/index.js";

const DetailsView = () => {
  let { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <MainTemplate>
      <Header>ID: {id}</Header>

      <Link to={routes.home}>
        <Button>powrót</Button>
      </Link>

      <Comments data={comments} />
    </MainTemplate>
  );
};

export default DetailsView;
