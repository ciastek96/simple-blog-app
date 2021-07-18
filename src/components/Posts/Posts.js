import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Posts.module.css";
import Button from "../Button/Button";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.loading);

  if (isLoading) return <p>Loading</p>;
  if (!posts.lenght > 0) <p>No posts to display</p>;
  return (
    <div className={styles.wrapper}>
      {posts.map((post) => (
        <div key={post.id} className={styles.innerWrapper}>
          <p>added by: {post.userId}</p>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`}>
            <Button>Więcej</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
