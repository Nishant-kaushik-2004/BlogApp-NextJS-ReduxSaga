export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    ME: '/api/auth/me',
  },
  POSTS: {
    LIST: '/api/posts',
    DETAIL: (id: number) => `/api/posts/${id}`,
    SEARCH: '/api/posts/search',
  },
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  BLOG: '/blog',
  BLOG_DETAIL: (id: number) => `/blog/${id}`,
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
} as const;

export const DEMO_CREDENTIALS = {
  username: 'emilys',
  password: 'emilyspass',
} as const;