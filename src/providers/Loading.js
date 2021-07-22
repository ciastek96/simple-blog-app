import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Loading = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const postLoading = useSelector(({ post }) => post.loading);
  const commentLoading = useSelector(({ comment }) => comment.loading);

  useEffect(() => {
    postLoading || commentLoading ? setIsLoading(true) : setIsLoading(false);
  });

  return props.render({ isLoading, setIsLoading });
};

export default Loading;
