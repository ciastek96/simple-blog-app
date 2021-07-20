import React from "react";
import { Link } from "react-router-dom";
import styles from "./Post.module.scss";

const Post = ({ data }) => {
  return (
    <div className={styles.post}>
      <p>added by: {data.userId}</p>
      <Link to={`/post/${data.id}`}>
        <h2>{data.title}</h2>
      </Link>
    </div>
  );
};

export default Post;
