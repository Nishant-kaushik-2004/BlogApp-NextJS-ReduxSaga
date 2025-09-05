'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchPostsStart } from '../../store/slices/postsSlice';
import { useAuth } from '../../hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  User, 
  BookOpen, 
  Eye, 
  Heart, 
  TrendingUp, 
  Calendar,
  Settings,
  Edit3,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const { posts, loading } = useSelector((state: RootState) => state.posts);
  
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalViews: 0,
    totalLikes: 0,
    avgViews: 0,
  });

  // Fetch posts when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchPostsStart({ limit: 30, skip: 0 }));
    }
  }, [dispatch, isAuthenticated]);

  // Calculate stats when posts are loaded
  useEffect(() => {
    if (posts.length > 0) {
      const totalViews = posts.reduce((acc, post) => acc + post.views, 0);
      const totalLikes = posts.reduce((acc, post) => acc + post.reactions.likes, 0);
      setStats({
        totalPosts: posts.length,
        totalViews,
        totalLikes,
        avgViews: Math.round(totalViews / posts.length),
      });
    }
  }, [posts]);

  // Redirect to login if not authenticated (only after auth loading is complete)
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      console.log('Redirecting to login - authLoading:', authLoading, 'isAuthenticated:', isAuthenticated);
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Show loading while checking authentication or if not authenticated yet
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render dashboard if not authenticated (will redirect)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Show fallback if no user data but authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Unable to load user data</p>
          <p className="text-sm text-gray-500 mb-4">Debug: isAuthenticated={isAuthenticated.toString()}, user={user ? 'exists' : 'null'}</p>
          <Link href="/login">
            <Button>Go to Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  const userInitials = `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={user.image} alt={user.firstName} />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                {userInitials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.firstName}!
              </h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">
              <User className="w-3 h-3 mr-1" />
              {user.gender}
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPosts}</div>
              <p className="text-xs text-muted-foreground">
                Available articles
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Across all posts
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalLikes}</div>
              <p className="text-xs text-muted-foreground">
                Community engagement
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Views</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgViews}</div>
              <p className="text-xs text-muted-foreground">
                Per article
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Your latest interactions with the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm">Logged in successfully</p>
                      <span className="text-xs text-gray-500 ml-auto">Just now</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-sm">Viewed blog articles</p>
                      <span className="text-xs text-gray-500 ml-auto">5 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <p className="text-sm">Accessed dashboard</p>
                      <span className="text-xs text-gray-500 ml-auto">10 min ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/blog">
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Browse All Articles
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start" disabled>
                    <Edit3 className="w-4 h-4 mr-2" />
                    Write New Post
                    <Badge variant="secondary" className="ml-auto">Coming Soon</Badge>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" disabled>
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                    <Badge variant="secondary" className="ml-auto">Coming Soon</Badge>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="posts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Posts Overview</CardTitle>
                <CardDescription>Manage and view all blog posts</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-gray-500 mt-2">Loading posts...</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Recent Posts ({posts.length})</h3>
                      <Link href="/blog">
                        <Button variant="outline" size="sm">View All</Button>
                      </Link>
                    </div>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {posts.slice(0, 10).map((post) => (
                        <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <Link href={`/blog/${post.id}`}>
                              <h4 className="font-medium hover:text-primary transition-colors cursor-pointer">
                                {post.title}
                              </h4>
                            </Link>
                            <p className="text-sm text-gray-500 flex items-center mt-1">
                              <Eye className="w-3 h-3 mr-1" />
                              {post.views} views
                              <Heart className="w-3 h-3 ml-3 mr-1" />
                              {post.reactions.likes} likes
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Analytics Dashboard
                </CardTitle>
                <CardDescription>Insights and metrics about blog performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Content Performance</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Engagement</span>
                        <span className="font-medium">{stats.totalLikes + stats.totalViews}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Engagement Rate</span>
                        <span className="font-medium">
                          {stats.totalViews > 0 ? ((stats.totalLikes / stats.totalViews) * 100).toFixed(1) : 0}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Content Score</span>
                        <span className="font-medium">Excellent</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(posts.flatMap(post => post.tags))).slice(0, 8).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Account Settings
                </CardTitle>
                <CardDescription>Manage your account preferences and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">First Name</Label>
                        <Input value={user.firstName} disabled className="mt-1" />
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Last Name</Label>
                        <Input value={user.lastName} disabled className="mt-1" />
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Email</Label>
                        <Input value={user.email} disabled className="mt-1" />
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Username</Label>
                        <Input value={user.username} disabled className="mt-1" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge variant="outline">
                        Settings are read-only in demo mode
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}