document.addEventListener('DOMContentLoaded', async () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Initialize UI components
  UI.displayFeaturedGames();
  UI.initializeParallax();

  // Fetch and display games
  const games = await API.getGames();
  UI.displayGames(games);

  // Fetch and display posts
  const posts = await API.getPosts();
  UI.displayPosts(posts);

  // Setup search functionality
  const searchInput = document.getElementById('gameSearch');
  const genreFilter = document.getElementById('genreFilter');

  function filterGames() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;

    const filteredGames = games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm) ||
                           game.description.toLowerCase().includes(searchTerm);
      const matchesGenre = selectedGenre === 'all' || game.genre.toLowerCase() === selectedGenre.toLowerCase();
      return matchesSearch && matchesGenre;
    });

    UI.displayGames(filteredGames);
  }

  searchInput.addEventListener('input', filterGames);
  genreFilter.addEventListener('change', filterGames);

  // Handle mobile menu
  const menuButton = document.querySelector('[data-lucide="menu"]');
  const navLinks = document.querySelector('.nav-links');

  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});