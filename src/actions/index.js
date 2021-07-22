const api = "https://jsonplaceholder.typicode.com";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });
  try {
    const res = await fetch(`${api}/posts`);
    const data = await res.json();
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", error });
    console.log(error);
  }
};

export const getComments = (id) => async (dispatch) => {
  dispatch({ type: "FETCH_COMMENTS_REQUEST" });
  try {
    const res = await fetch(`${api}/comments?postId=${id}`);
    const data = await res.json();
    dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_COMMENTS_FAILURE", error });
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const res = await fetch(`${api}/users`);
    const data = await res.json();
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", error });
    console.log(error);
  }
};

export const addCommentToFavs = (comment) => async (dispatch) => {
  try {
    const favsList = localStorage.getItem("comments")
      ? JSON.parse(localStorage.getItem("comments"))
      : [];
    if (!favsList.some((el) => el.id === comment.id)) {
      localStorage.setItem("comments", JSON.stringify([...favsList, comment]));
    }
    dispatch({ type: "SET_FAVS_COMMENTS", payload: [...favsList, comment] });
  } catch (error) {
    console.log(error);
  }
};

export const removeCommentFromFavs = (comment) => async (dispatch) => {
  try {
    const favsList = localStorage.getItem("comments")
      ? JSON.parse(localStorage.getItem("comments"))
      : [];
    if (favsList.some((el) => el.id === comment.id)) {
      localStorage.setItem(
        "comments",
        JSON.stringify([...favsList.filter((el) => el.id !== comment.id)])
      );
    }
    dispatch({
      type: "SET_FAVS_COMMENTS",
      payload: [...favsList.filter((el) => el.id !== comment.id)],
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPostToFavs = (post) => async (dispatch) => {
  try {
    const favsList = localStorage.getItem("posts")
      ? JSON.parse(localStorage.getItem("posts"))
      : [];
    if (!favsList.some((el) => el.id === post.id)) {
      localStorage.setItem("posts", JSON.stringify([...favsList, post]));
    }
    dispatch({ type: "SET_FAVS_POSTS", payload: [...favsList, post] });
  } catch (error) {
    console.log(error);
  }
};

export const removePostFromFavs = (post) => async (dispatch) => {
  try {
    const favsList = localStorage.getItem("posts")
      ? JSON.parse(localStorage.getItem("posts"))
      : [];
    if (favsList.some((el) => el.id === post.id)) {
      localStorage.setItem(
        "posts",
        JSON.stringify([...favsList.filter((el) => el.id !== post.id)])
      );
    }
    dispatch({
      type: "SET_FAVS_POSTS",
      payload: [...favsList.filter((el) => el.id !== post.id)],
    });
  } catch (error) {
    console.log(error);
  }
};

export const setFavsComments = () => async (dispatch) => {
  try {
    const favsList = localStorage.getItem("comments")
      ? JSON.parse(localStorage.getItem("comments"))
      : [];
    dispatch({ type: "SET_FAVS_COMMENTS", payload: favsList });
  } catch (error) {
    console.log(error);
  }
};

export const setFavsPosts = () => async (dispatch) => {
  try {
    const favsList = localStorage.getItem("posts")
      ? JSON.parse(localStorage.getItem("posts"))
      : [];
    dispatch({ type: "SET_FAVS_POSTS", payload: favsList });
  } catch (error) {
    console.log(error);
  }
};
