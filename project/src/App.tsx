import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import Community from './components/Community';
import Games from './components/Games';

const featuredGames = [
  {
    id: '1',
    title: 'Cyber Legends',
    description: 'An immersive cyberpunk RPG with stunning visuals and deep storyline.',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    genre: 'RPG',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Space Warriors',
    description: 'Epic space combat with multiplayer battles and strategic gameplay.',
    imageUrl: 'https://images.unsplash.com/photo-1536108978996-68ad3526c7dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    genre: 'Action',
    rating: 4.5
  },
  {
    id: '3',
    title: 'Medieval Quest',
    description: 'Explore a vast medieval world filled with magic and adventure.',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    genre: 'Adventure',
    rating: 4.7
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        <Games />
        
        <Community />

        <section className="mt-20">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-lg mb-6">Create your account and start your gaming journey today!</p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">GameVault</h3>
              <p className="text-sm">Your ultimate gaming destination</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Games</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 GameVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;