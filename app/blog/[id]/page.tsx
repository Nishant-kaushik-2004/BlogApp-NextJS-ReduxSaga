'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { RootState } from '../../../store';
import { fetchPostByIdStart, clearCurrentPost } from '../../../store/slices/postsSlice';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/Loader/Loader';
import { ArrowLeft, Eye, Heart, MessageCircle, Share2 } from 'lucide-react';
import Link from 'next/link';
import { getReadingTime } from '../../../utils/helpers';

export default function BlogDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const postId = params?.id ? parseInt(params.id as string) : null;
  
  const { currentPost, loading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (postId && !isNaN(postId)) {
      dispatch(fetchPostByIdStart(postId));
    }

    return () => {
      dispatch(clearCurrentPost());
    };
  }, [dispatch, postId]);

  // Handle invalid post ID
  if (postId === null || isNaN(postId)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Invalid post ID</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <Button onClick={() => postId && dispatch(fetchPostByIdStart(postId))}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Post not found</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {currentPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {currentPost.title}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-500 border-b pb-6">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {currentPost.views} views
              </span>
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                {currentPost.reactions.likes} likes
              </span>
              <span>{getReadingTime(currentPost.body)} min read</span>
            </div>
            
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
              {currentPost.body}
            </p>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Like ({currentPost.reactions.likes})
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </Button>
            </div>
            
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </footer>
      </article>
    </div>
  );
}