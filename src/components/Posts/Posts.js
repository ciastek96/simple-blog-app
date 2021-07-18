import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(posts);

  if (!posts.length > 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`}>
            <button>Więcej</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
