import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Loading = (props) => {
  const [isError, setIsError] = useState(false);
  const postError = useSelector(({ post }) => post.error);
  const commentError = useSelector(({ comment }) => comment.error);
  const userError = useSelector(({ user }) => user.error);

  useEffect(() => {
    postError || commentError || userError
      ? setIsError(true)
      : setIsError(false);
  });

  return props.render({ isError, setIsError });
};

export default Loading;
