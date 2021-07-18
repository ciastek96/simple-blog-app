import React from "react";
import styles from "./Comments.module.css";
import Heart from "../Heart/Heart";

const Comments = ({ data }) => {
  if (!data) return "Loading...";
  return (
    <div className={styles.wrapper}>
      {data.length > 0 ? (
        data.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <Heart />
            <p className={styles.author}> {comment.email}</p>
            <p className={styles.title}>{comment.name}</p>
            <p className={styles.content}> {comment.body}</p>
          </div>
        ))
      ) : (
        <p>No comments yet!</p>
      )}
    </div>
  );
};

export default Comments;
