const SET_FAVS_POSTS = "SET_FAVS_POSTS";
const SET_FAVS_COMMENTS = "SET_FAVS_COMMENTS";

const initialState = {
  posts: [],
  comments: [],
};

const favoriteReducer = (favorite = initialState, { type, payload }) => {
  switch (type) {
    case SET_FAVS_POSTS:
      return {
        ...favorite,
        posts: [...payload],
      };
    case SET_FAVS_COMMENTS:
      return {
        ...favorite,
        comments: [...payload],
      };
    default:
      return favorite;
  }
};

export default favoriteReducer;
