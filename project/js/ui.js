class UI {
  static featuredGames = [
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

  static createGameCard(game) {
    return `
      <div class="game-card">
        <img src="${game.imageUrl}" alt="${game.title}" class="game-image">
        <div class="game-content">
          <h3 class="game-title">${game.title}</h3>
          <p class="game-description">${game.description}</p>
          <div class="game-footer">
            <span class="game-genre">${game.genre}</span>
            <div class="game-rating">
              <i data-lucide="star" class="text-yellow-400"></i>
              <span>${game.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static createPostCard(post) {
    const date = new Date(post.created_at).toLocaleDateString();
    return `
      <div class="post-card">
        <div class="post-header">
          <img src="${post.author.avatar_url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=80&h=80'}" 
               alt="${post.author.username}" 
               class="post-avatar">
          <div>
            <h4 class="font-semibold">${post.author.username}</h4>
            <p class="text-gray-400 text-sm">${date}</p>
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-2">${post.title}</h3>
        <p class="text-gray-300 mb-4">${post.content}</p>
        <div class="flex items-center space-x-4 text-gray-400">
          <button class="flex items-center space-x-1 hover:text-purple-500">
            <i data-lucide="thumbs-up"></i>
            <span>${post.likes}</span>
          </button>
          <button class="flex items-center space-x-1 hover:text-purple-500">
            <i data-lucide="message-square"></i>
            <span>${post.comments_count}</span>
          </button>
        </div>
      </div>
    `;
  }

  static displayFeaturedGames() {
    const container = document.getElementById('featuredGamesGrid');
    container.innerHTML = this.featuredGames.map(game => this.createGameCard(game)).join('');
  }

  static displayGames(games) {
    const container = document.getElementById('gamesGrid');
    container.innerHTML = games.map(game => this.createGameCard(game)).join('');
  }

  static displayPosts(posts) {
    const container = document.getElementById('postsContainer');
    container.innerHTML = posts.map(post => this.createPostCard(post)).join('');
  }

  static initializeParallax() {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      const hero = document.getElementById('hero');
      if (hero) {
        hero.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    });
  }
}