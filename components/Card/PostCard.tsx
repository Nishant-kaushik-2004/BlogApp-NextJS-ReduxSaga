import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Post } from "../../store/slices/postsSlice";
import { truncateText, getReadingTime } from "../../utils/helpers";
import { Eye, Heart, MessageCircle } from "lucide-react";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-3">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {truncateText(post.body, 120)}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {post.views}
              </span>
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                {post.reactions.likes}
              </span>
            </div>
            <span>{getReadingTime(post.body)} min read</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;
