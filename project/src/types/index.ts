export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  genre: string;
  rating: number;
}

export interface User {
  id: string;
  email: string;
  username: string;
  avatarUrl?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author_id: string;
  created_at: string;
  author: {
    username: string;
    avatar_url?: string;
  };
  likes: number;
  comments_count: number;
}

export interface Comment {
  id: string;
  content: string;
  post_id: string;
  author_id: string;
  created_at: string;
  author: {
    username: string;
    avatar_url?: string;
  };
}