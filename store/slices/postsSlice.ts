import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface PostsState {
  posts: Post[];
  currentPost: Post | null;
  loading: boolean;
  error: string | null;
  pagination: {
    total: number;
    skip: number;
    limit: number;
  };
}

const initialState: PostsState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
  pagination: {
    total: 0,
    skip: 0,
    limit: 10,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart: (state, action: PayloadAction<{ limit?: number; skip?: number }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action: PayloadAction<{ posts: Post[]; total: number; skip: number; limit: number }>) => {
      state.posts = action.payload.posts;
      state.pagination = {
        total: action.payload.total,
        skip: action.payload.skip,
        limit: action.payload.limit,
      };
      state.loading = false;
    },
    fetchPostsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchPostByIdStart: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.error = null;
    },
    fetchPostByIdSuccess: (state, action: PayloadAction<Post>) => {
      state.currentPost = action.payload;
      state.loading = false;
    },
    fetchPostByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearCurrentPost: (state) => {
      state.currentPost = null;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostByIdStart,
  fetchPostByIdSuccess,
  fetchPostByIdFailure,
  clearCurrentPost,
} = postsSlice.actions;
export default postsSlice.reducer;