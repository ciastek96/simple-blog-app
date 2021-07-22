const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const initialState = {
  users: [],
  loading: false,
  error: null,
  success: null,
};

const userReducer = (users = initialState, { type, payload, error }) => {
  switch (type) {
    case FETCH_USERS_SUCCESS:
      return {
        users: [...payload],
        error: false,
        loading: false,
      };
    case FETCH_USERS_REQUEST:
      return {
        ...users,
        error: null,
        loading: true,
      };
    case FETCH_USERS_FAILURE:
      return {
        error,
        loading: false,
      };
    default:
      return users;
  }
};

export default userReducer;
