import React from "react";
import { useSelector } from "react-redux";
import styles from "./Posts.module.css";
import Post from "./Post";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const users = useSelector((state) => state.user.users);

  if (!posts.lenght > 0) <p>No posts to display</p>;

  return (
    <div>
      {posts.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        if (user) return <Post key={post.id} data={{ user, post }} />;
      })}
    </div>
  );
};

export default Posts;
