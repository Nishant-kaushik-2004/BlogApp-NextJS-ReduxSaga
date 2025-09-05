"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import PostsList from "@/components/ItemList/PostsList";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover insightful articles, tutorials, and stories from our
              community of writers.
            </p>
          </div>

          {/* Search */}
          <form className="max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Posts List */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <PostsList searchTerm={searchTerm} />
        </div>
      </section>
    </div>
  );
}
