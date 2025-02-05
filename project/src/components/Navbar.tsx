import React from 'react';
import { Menu, Search, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 cursor-pointer hover:text-purple-400 transition-colors" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            GameVault
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Games</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Community</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
        </div>

        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5 cursor-pointer hover:text-purple-400 transition-colors" />
          <User className="h-5 w-5 cursor-pointer hover:text-purple-400 transition-colors" />
          <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <LogIn className="h-4 w-4" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </nav>
  );
}