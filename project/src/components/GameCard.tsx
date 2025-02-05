import React from 'react';
import { Star } from 'lucide-react';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <img 
        src={game.imageUrl} 
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{game.description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">
            {game.genre}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-white">{game.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}