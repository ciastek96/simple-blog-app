import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getComments } from "../actions/";
import { routes } from "../routes/index.js";
import MainTemplate from "../templates/MainTemplate.js";
import Button from "../components/Button/Button";
import Post from "../components/Posts/Post";
import Comments from "../components/Comments/Comments";

const DetailsView = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  let { id } = useParams();
  const post = useSelector(({ post }) => post.posts)?.find(
    (el) => el.id === parseInt(id, 10)
  );
  const user = useSelector((state) => state.user.users)?.find(
    (el) => el.id === post?.userId
  );
  const comments = useSelector(({ comment }) => comment.comments);

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch]);

  return (
    <MainTemplate>
      <Button onClick={() => push(routes.home)}>powrót</Button>

      {post ? (
        <>
          <Post data={{ post, user }} detailsView="true" />
          <Comments data={comments} title="Komentarze" />
        </>
      ) : (
        <p>Nie znaleziono artykułu o podanym ID!</p>
      )}
    </MainTemplate>
  );
};

export default DetailsView;
