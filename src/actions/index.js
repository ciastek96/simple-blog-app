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
