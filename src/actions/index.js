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

export const addToFavorites = (data) => async (dispatch) => {
  try {
    const favsList = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    if (!favsList.some((el) => el.id === data.id)) {
      localStorage.setItem("favorites", JSON.stringify([...favsList, data]));
    }
    // dispatch({ type: "ADD_FAVORITE", payload: data });
    //console.log(data);
  } catch (error) {
    // dispatch({ type: "FETCH_COMMENTS_FAILURE", error });
    console.log(error);
  }
};

export const removeFromFavorites = (data) => async (dispatch) => {
  try {
    const favsList = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    if (favsList.some((el) => el.id === data.id)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favsList.filter((el) => el.id !== data.id)])
      );
    }

    // dispatch({ type: "REMOVE_FAVORITE", payload: data });
  } catch (error) {
    // dispatch({ type: "FETCH_COMMENTS_FAILURE", error });
    console.log(error);
  }
};
