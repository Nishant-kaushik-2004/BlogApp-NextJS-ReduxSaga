# 🚀 BlogApp - Next.js + Redux-Saga

![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-RTK-purple?logo=redux)
![Redux Saga](https://img.shields.io/badge/Redux%20Saga-Side%20Effects-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-blue)

> A **full-featured blog application** showcasing modern **Next.js App Router**, **Redux Toolkit + Redux-Saga**, **authentication**, **SSR/SSG**, and **responsive design**.  
> Built as an **internship assignment** and polished for my **portfolio**.

---

## ✨ Features

- 📰 **Modern Blog Interface** – Clean, responsive, mobile-first UI  
- 🔐 **Authentication System** – Login/logout with DummyJSON API  
- 🛡 **Protected Routes** – Dashboard for authenticated users only  
- ⚡ **State Management** – Redux Toolkit + Redux-Saga for async flows  
- 🌐 **Server-Side Rendering (SSR) + SSG** – SEO & performance optimized  
- 🛠 **Custom API Routes** – Extendable Next.js API layer  
- 🎨 **Responsive Design** – Tailwind CSS + shadcn/ui components  
- 📱 **Cross-Device Ready** – Works on mobile, tablet, and desktop  

---

## 🖼 Preview

### 🔹 Home Page
![Home Screenshot](./screenshots/home.png)

### 🔹 Blog Listing with Search
![Blog Screenshot](./screenshots/blog.png)

### 🔹 Protected Dashboard
![Dashboard Screenshot](./screenshots/dashboard.png)

👉 **Live Demo**: [https://nishant-blog.vercel.app](https://nishant-blog.vercel.app)

---

## 🛠 Tech Stack

- **Framework**: [Next.js 13+ App Router](https://nextjs.org/)  
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) + [Redux-Saga](https://redux-saga.js.org/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)  
- **Language**: [TypeScript](https://www.typescriptlang.org/)  
- **API**: [DummyJSON](https://dummyjson.com/) for demo data  
- **Icons**: [Lucide React](https://lucide.dev/)  

---

## 📂 Project Structure

```bash
├── app/                    # Next.js app router
│   ├── api/                # API routes
│   ├── blog/               # Blog pages
│   ├── dashboard/          # Protected dashboard
│   └── login/              # Auth pages
├── components/             # UI & feature components
│   ├── ui/                 # shadcn/ui primitives
│   ├── HOC/                # Higher-order components
│   └── Card/               # Post cards etc.
├── store/                  # Redux store setup
│   ├── slices/             # RTK slices
│   └── sagas/              # Saga workers/watchers
├── services/               # API service layers
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript definitions
└── utils/                  # Utility helpers
