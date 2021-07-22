const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  success: null,
};

const postReducer = (posts = initialState, { type, payload, error }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return {
        posts: [...payload],
        error: false,
        loading: false,
      };
    case FETCH_POSTS_REQUEST:
      return {
        ...posts,
        error: null,
        loading: true,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...posts,
        error: error,
        loading: false,
      };
    default:
      return posts;
  }
};

export default postReducer;
