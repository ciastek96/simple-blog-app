import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import { addPostToFavs, removePostFromFavs } from "../../actions";
import HeartButton from "../HeartButton/HeartButton";

const Post = ({ data: { post, user }, detailsView }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.favorite.posts);

  useEffect(() => {
    if (favoritesList.some((fav) => fav.id === post.id)) {
      setIsPressed(true);
    } else {
      setIsPressed(false);
    }
  }, []);

  const handleClick = (el) => {
    if (isPressed) {
      setIsPressed(false);
      dispatch(removePostFromFavs(el));
    } else {
      setIsPressed(true);
      dispatch(addPostToFavs(el));
    }
  };
  return (
    <div className={styles.post}>
      <HeartButton isPressed={isPressed} onClickFn={() => handleClick(post)} />
      <p className={styles.post__author}>Added by: {user?.name}</p>
      {detailsView ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <Link to={`/post/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
      )}
    </div>
  );
};

export default Post;
