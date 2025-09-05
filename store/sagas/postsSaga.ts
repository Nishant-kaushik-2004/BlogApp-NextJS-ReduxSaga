import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostByIdStart,
  fetchPostByIdSuccess,
  fetchPostByIdFailure,
} from '../slices/postsSlice';
import { postsService } from '../../services/postsService';

function* fetchPostsSaga(action: PayloadAction<{ limit?: number; skip?: number }>): Generator<any, void, any> {
  try {
    const { limit = 10, skip = 0 } = action.payload;
    const response = yield call(postsService.fetchPosts, { limit, skip });
    yield put(fetchPostsSuccess(response));
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message || 'Failed to fetch posts'));
  }
}

function* fetchPostByIdSaga(action: PayloadAction<number>): Generator<any, void, any> {
  try {
    const post = yield call(postsService.fetchPostById, action.payload);
    yield put(fetchPostByIdSuccess(post));
  } catch (error: any) {
    yield put(fetchPostByIdFailure(error.message || 'Failed to fetch post'));
  }
}

function* postsSaga() {
  yield takeLatest(fetchPostsStart.type, fetchPostsSaga);
  yield takeLatest(fetchPostByIdStart.type, fetchPostByIdSaga);
}

export default postsSaga;