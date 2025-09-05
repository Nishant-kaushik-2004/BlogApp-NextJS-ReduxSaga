// components/ItemList/PostsList.tsx
"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchPostsStart } from "../../store/slices/postsSlice";
import PostCard from "../Card/PostCard";
import { Loader } from "../Loader/Loader";

const PostsList = ({ searchTerm }: { searchTerm: string }) => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsStart({ limit: 50, skip: 0 })); // load more so search feels better
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <button
          onClick={() => dispatch(fetchPostsStart({ limit: 12, skip: 0 }))}
          className="text-primary hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  // filter posts
  const filtered = posts.filter((post) => {
    const title = post.title?.toLowerCase() || "";
    const body = post.body?.toLowerCase() || "";
    const tags = post.tags?.join(" ").toLowerCase() || "";

    return (
      title.includes(searchTerm.toLowerCase()) ||
      body.includes(searchTerm.toLowerCase()) ||
      tags.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {filtered.length === 0 && (
        <p className="col-span-full text-center text-gray-500">
          No posts found for {searchTerm}
        </p>
      )}
    </div>
  );
};

export default PostsList;
