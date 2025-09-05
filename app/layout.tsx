import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from '@/components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BlogApp - Modern Next.js Blog',
  description: 'A comprehensive blog application built with Next.js, Redux Toolkit, and Redux-Saga',
  keywords: 'blog, nextjs, redux, saga, react',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}