import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const postsService = {
  fetchPosts: async ({ limit = 10, skip = 0 }: { limit?: number; skip?: number }) => {
    const response = await axios.get(`${API_BASE_URL}/posts?limit=${limit}&skip=${skip}`);
    return response.data;
  },

  fetchPostById: async (id: number) => {
    const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
    return response.data;
  },

  searchPosts: async (query: string) => {
    const response = await axios.get(`${API_BASE_URL}/posts/search?q=${query}`);
    return response.data;
  },

  fetchPostsByUser: async (userId: number) => {
    const response = await axios.get(`${API_BASE_URL}/posts/user/${userId}`);
    return response.data;
  },
};