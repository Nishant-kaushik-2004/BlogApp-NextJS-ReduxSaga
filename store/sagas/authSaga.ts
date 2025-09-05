import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { loginStart, loginSuccess, loginFailure } from '../slices/authSlice';

function* loginSaga(action: PayloadAction<{ username: string; password: string }>): Generator<any, void, any> {
  try {
    // Call DummyJSON API directly
    const response = yield call(fetch, 'https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    const data = yield call([response, 'json']);
    
    // DummyJSON returns user data directly in the response
    const userData = {
      user: {
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        image: data.image,
      },
      token: data.token,
    };
    
    yield put(loginSuccess(userData));
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(userData.user));
  } catch (error: any) {
    yield put(loginFailure(error.message || 'Login failed'));
  }
}

function* authSaga() {
  yield takeLatest(loginStart.type, loginSaga);
}

export default authSaga;