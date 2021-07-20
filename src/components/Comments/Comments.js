import React from "react";
import styles from "./Comments.module.css";
import Comment from "./Comment";

const Comments = ({ data }) => {
  if (!data) return "Loading...";
  return (
    <div className={styles.wrapper}>
      {data.length > 0 ? (
        data.map((comment) => <Comment key={comment.id} data={comment} />)
      ) : (
        <p>No comments yet!</p>
      )}
    </div>
  );
};

export default Comments;
