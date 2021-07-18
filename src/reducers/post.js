import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
        error,
        loading: false,
      };
    default:
      return posts;
  }
};

export default postReducer;

// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//   const response = await client.get('/fakeApi/todos')
//   return response.todos
// })

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return response.posts;
// });

// const postSlice = createSlice({
//   name: "post",
//   initialState,
//   reducers: {
//     postsLoading(state, action) {
//       return {
//         ...state,
//         loading: true,
//       };
//     },
//     getPosts(state, { payload }) {
//       // state.value = payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state, action) => {
//         state.status = "loading";
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         const newEntities = {};
//         action.payload.forEach((todo) => {
//           newEntities[todo.id] = todo;
//         });
//         state.entities = newEntities;
//         state.status = "idle";
//       });
//   },
// });

// export const { postsLoading, getPosts } = postSlice.actions;
// export default postSlice.reducer;
