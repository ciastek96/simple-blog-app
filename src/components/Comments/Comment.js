import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentToFavs, removeCommentFromFavs } from "../../actions";
import styles from "./Comment.module.css";
import HeartButton from "../HeartButton/HeartButton";

const Comment = ({ data }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.favorite.comments);

  useEffect(() => {
    if (favoritesList.some((fav) => fav.id === data.id)) {
      setIsPressed(true);
    }
  }, []);

  const handleClick = (el) => {
    if (isPressed) {
      setIsPressed(false);
      dispatch(removeCommentFromFavs(el));
    } else {
      setIsPressed(true);
      dispatch(addCommentToFavs(el));
    }
  };

  return (
    <div className={styles.comment}>
      <HeartButton isPressed={isPressed} onClickFn={() => handleClick(data)} />
      <p className={styles.comment__author}>Dodano przez: {data.email}</p>
      <p className={styles.comment__title}>{data.name}</p>
      <p className={styles.comment__content}> {data.body}</p>
    </div>
  );
};

export default Comment;
