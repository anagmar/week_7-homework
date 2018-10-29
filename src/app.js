const Movies = require('./models/movies.js')
// const Movies = require('./models/movies.js');
const MovieListView = require('./views/movies_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const listContainer = document.querySelector('#ghibli-list');
  const movieListView = new MovieListView(listContainer);
  movieListView.bindEvents();

  const movies = new Movies;
  movies.getData()
  console.log(movies);
})
