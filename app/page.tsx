'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: 'Rich Content',
      description: 'Discover engaging articles and stories from various authors and topics.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Community',
      description: 'Join a community of readers and writers sharing knowledge and experiences.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Trending Topics',
      description: 'Stay updated with the latest trends and popular discussions.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-primary">BlogApp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover amazing stories, insights, and knowledge from writers around the world. 
            Join our community and start your reading journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button size="lg" className="text-lg px-8 py-3">
                Explore Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose BlogApp?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the best of modern blogging with our feature-rich platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Reading?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of readers who trust BlogApp for their daily dose of knowledge and inspiration.
          </p>
          <Link href="/blog">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3 hover:bg-white hover:text-primary transition-colors"
            >
              Browse Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}