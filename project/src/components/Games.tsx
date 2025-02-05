import React, { useEffect, useState } from 'react';
import { Search, Filter, Star, GamepadIcon } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Game } from '../types';

export default function Games() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const genres = ['all', 'RPG', 'Action', 'Adventure', 'Strategy', 'Sports', 'Simulation'];

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames() {
    try {
      const { data, error } = await supabase
        .from('games')
        .select('*')
        .order('rating', { ascending: false });

      if (error) throw error;
      setGames(data || []);
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || game.genre.toLowerCase() === selectedGenre.toLowerCase();
    return matchesSearch && matchesGenre;
  });

  return (
    <section className="py-16 bg-gray-900" id="games">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <GamepadIcon className="h-12 w-12 text-purple-500 mr-4" />
            <h2 className="text-4xl font-bold text-white">Explore Games</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our curated collection of games across various genres
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center text-gray-400">Loading games...</div>
        ) : filteredGames.length === 0 ? (
          <div className="text-center text-gray-400">No games found matching your criteria</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map(game => (
              <div
                key={game.id}
                className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <img
                    src={game.imageUrl}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {game.genre}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="text-white font-semibold">{game.rating.toFixed(1)}</span>
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold transform hover:translate-y-[-4px] transition-all duration-300 hover:shadow-lg">
            Load More Games
          </button>
        </div>
      </div>
    </section>
  );
}