import React from "react";
import { useSelector } from "react-redux";
import styles from "./Posts.module.css";
import Post from "./Post";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.loading);

  if (isLoading) return <p>Loading</p>;
  if (!posts.lenght > 0) <p>No posts to display</p>;

  return (
    <div className={styles.wrapper}>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
};

export default Posts;
