import { createSlice } from "@reduxjs/toolkit";

const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

const initialState = {
  loading: false,
  error: null,
  success: null,
};

// const accountReducer = (posts = initialState, { type, payload, error }) => {
//   switch (type) {
//     case FETCH_POSTS_SUCCESS:
//       return {
//         ...payload,
//         error: false,
//         loading: false,
//       };
//     case FETCH_POSTS_REQUEST:
//       return {
//         ...posts,
//         error: null,
//         loading: true,
//       };
//     case FETCH_POSTS_FAILURE:
//       return {
//         error,
//         loading: false,
//       };
//     default:
//       return posts;
//   }
// };

// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//   const response = await client.get('/fakeApi/todos')
//   return response.todos
// })

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state, { payload }) {
      // state.value = payload;
    },
  },
});

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;
