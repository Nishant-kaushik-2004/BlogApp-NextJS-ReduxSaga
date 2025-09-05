# BlogApp - Next.js with Redux-Saga

A full-featured blog application built with Next.js, Redux Toolkit, and Redux-Saga demonstrating modern React development patterns, state management, and side effect handling.

## 🚀 Features

- **Modern Blog Interface**: Clean, responsive design with smooth animations
- **Authentication System**: Login/logout with DummyJSON API integration
- **Protected Routes**: Dashboard accessible only to authenticated users
- **State Management**: Redux Toolkit with Redux-Saga for async operations
- **Server-Side Rendering**: SSR and SSG implementation
- **API Routes**: Custom Next.js API endpoints
- **SEO Optimized**: Proper meta tags and structured data
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠 Tech Stack

- **Framework**: Next.js 13+ with App Router
- **State Management**: Redux Toolkit + Redux-Saga
- **Styling**: Tailwind CSS + shadcn/ui components
- **TypeScript**: Full type safety
- **API**: DummyJSON for demo data
- **Icons**: Lucide React

## 📁 Project Structure

```
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── dashboard/         # Protected dashboard
│   └── login/             # Authentication
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui base components
│   ├── HOC/              # Higher-order components
│   └── [ComponentName]/   # Feature components
├── store/                 # Redux store configuration
│   ├── slices/           # Redux Toolkit slices
│   └── sagas/            # Redux-Saga effects
├── services/             # API service layers
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── types/                # TypeScript type definitions
└── utils/                # Helper functions
```

## 🔧 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Demo Login Credentials**:
   - Username: `emilys`
   - Password: `emilyspass`

## 📚 Key Implementation Details

### Redux Store Setup
- Configured with Redux Toolkit for efficient state management
- Redux-Saga middleware for handling side effects
- Separate slices for authentication and posts

### Authentication Flow
- Login form with validation and error handling
- Token-based authentication with localStorage persistence
- Protected routes using HOC pattern
- Automatic token validation and user session management

### Data Fetching
- Redux-Saga handles all async operations
- Error states and loading indicators
- Optimistic updates where appropriate
- Proper cleanup and memory management

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Consistent spacing and typography
- Interactive elements with hover states
- Smooth transitions and animations

## 🎯 Core Pages

1. **Home**: Hero section with feature highlights
2. **Blog**: Post listing with search functionality
3. **Blog Detail**: Individual post view with engagement metrics
4. **About**: Company story and values
5. **Contact**: Contact form and information
6. **Dashboard**: Protected user dashboard with stats
7. **Login**: Authentication with demo credentials

## 🔒 Security Features

- Route protection with authentication checks
- Token validation and refresh handling
- Error boundary implementation
- Secure API endpoint proxying

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Design System

- **Primary Color**: Blue (#3B82F6)
- **Typography**: Inter font family
- **Spacing**: 8px base unit system
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icon set

This project demonstrates best practices for modern React applications with proper state management, side effect handling, and user experience design.