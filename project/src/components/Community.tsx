import React, { useEffect, useState } from 'react';
import { MessageSquare, ThumbsUp, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Post } from '../types';

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          author:profiles(username, avatar_url)
        `)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Gaming Community</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join our vibrant community of gamers. Share your experiences, discuss strategies, and make new friends!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Active Members</h3>
            <p className="text-gray-400">10,000+</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <MessageSquare className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Daily Discussions</h3>
            <p className="text-gray-400">500+</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
            <ThumbsUp className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Active Topics</h3>
            <p className="text-gray-400">1,000+</p>
          </div>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="text-center text-gray-400">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="text-center text-gray-400">No posts yet. Be the first to share!</div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.avatar_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=80&h=80'}
                    alt={post.author.username}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{post.author.username}</h4>
                    <p className="text-gray-400 text-sm">
                      {new Date(post.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.content}</p>
                <div className="flex items-center space-x-4 text-gray-400">
                  <button className="flex items-center space-x-1 hover:text-purple-500 transition-colors">
                    <ThumbsUp className="h-5 w-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-purple-500 transition-colors">
                    <MessageSquare className="h-5 w-5" />
                    <span>{post.comments_count}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:translate-y-[-4px] hover:shadow-lg">
            Create New Post
          </button>
        </div>
      </div>
    </section>
  );
}