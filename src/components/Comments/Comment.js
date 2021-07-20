import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../actions";
import HeartIcon from "../../assets/icons/Heart.svg";
import styles from "./Comment.module.scss";

const Comment = ({ data }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.favorite.favorites);

  useEffect(() => {
    if (favList.some((fav) => fav.id === data.id)) {
      setIsFav(true);
    }
  }, []);

  const handleClick = (el) => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFromFavorites(el));
    } else {
      setIsFav(true);
      dispatch(addToFavorites(el));
    }
  };

  return (
    <div className={styles.comment}>
      <button onClick={() => handleClick(data)} className={styles.button}>
        {isFav ? (
          <HeartIcon className={styles.heartActive} />
        ) : (
          <HeartIcon className={styles.heart} />
        )}
      </button>
      <p className={styles.author}> {data.email}</p>
      <p className={styles.title}>{data.name}</p>
      <p className={styles.content}> {data.body}</p>
    </div>
  );
};

export default Comment;
