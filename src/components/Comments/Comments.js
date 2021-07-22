import React from "react";
import styles from "./Comments.module.css";
import Comment from "./Comment";

const Comments = ({ data, title }) => {
  if (!data || !data?.length > 0) return <p>Brak komentarzy!</p>;

  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      {data?.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default Comments;
