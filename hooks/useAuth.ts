'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '../store';
import { loginSuccess, logout } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Check for stored auth data on app load only if not already authenticated
    if (!isAuthenticated && !loading) {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (token && storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          dispatch(loginSuccess({ 
            user: parsedUser, 
            token 
          }));
        } catch (error) {
          console.error('Error parsing stored user data:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      }
    }
  }, [dispatch, isAuthenticated, loading]);

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(logout());
    router.push('/');
  };

  return {
    user,
    isAuthenticated,
    loading,
    logoutUser,
  };
};