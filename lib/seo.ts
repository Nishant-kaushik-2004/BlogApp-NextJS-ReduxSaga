import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function generateSEO({
  title,
  description,
  keywords,
  image = '/images/og-default.jpg',
  url = 'https://blogapp.example.com',
}: SEOProps): Metadata {
  return {
    title: `${title} | BlogApp`,
    description,
    keywords: keywords || 'blog, articles, nextjs, redux, saga',
    openGraph: {
      title: `${title} | BlogApp`,
      description,
      url,
      siteName: 'BlogApp',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | BlogApp`,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}