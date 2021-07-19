import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getComments } from "../actions/";
import MainTemplate from "../templates/MainTemplate.js";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import Comments from "../components/Comments/Comments";
import { routes } from "../routes/index.js";

const DetailsView = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const currentPost = useSelector(({ post }) => post.posts).find(
    (el) => el.id === parseInt(id, 10)
  );
  const comments = useSelector(({ comment }) => comment.comments);

  console.log(comments);

  useEffect(() => {
    dispatch(getComments(id));
  }, []);

  return (
    <MainTemplate>
      <Header>ID: {id}</Header>
      <Link to={routes.home}>
        <Button>powrót</Button>
      </Link>

      {currentPost ? (
        <div>
          <div>
            <p>added by: {currentPost.userId}</p>
            <h2>{currentPost.title}</h2>
            <p>{currentPost.body}</p>
          </div>
          <Comments data={comments} />
        </div>
      ) : (
        <p>Nie znaleziono artykułu o podanym ID</p>
      )}
    </MainTemplate>
  );
};

export default DetailsView;
