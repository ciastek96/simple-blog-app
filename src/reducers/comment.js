const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

const initialState = {
  comments: [],
  loading: false,
  error: null,
  success: null,
};

const commentReducer = (comments = initialState, { type, payload, error }) => {
  switch (type) {
    case FETCH_COMMENTS_SUCCESS:
      return {
        comments: [...payload],
        error: false,
        loading: false,
      };
    case FETCH_COMMENTS_REQUEST:
      return {
        ...comments,
        error: null,
        loading: true,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        error,
        loading: false,
      };
    default:
      return comments;
  }
};

export default commentReducer;
