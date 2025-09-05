import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const authService = {
  login: async (credentials: { username: string; password: string }) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
  },
  
  refreshToken: async (token: string) => {
    const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
      refreshToken: token,
    });
    return response.data;
  },

  getCurrentUser: async (token: string) => {
    const response = await axios.get(`${API_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};