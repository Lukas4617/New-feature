class API {
  static async getGames() {
    try {
      const { data, error } = await supabase
        .from('games')
        .select('*')
        .order('rating', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching games:', error);
      return [];
    }
  }

  static async getPosts() {
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
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }
}