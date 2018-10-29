const PubSub = require('../helpers/pub_sub.js');
const MovieDetailView = require('./movies_detail_view');

const MovieListView = function (container) {
  this.container = container;
};

MovieListView.prototype.bindEvents = function () {
  PubSub.subscribe('Movies:movies-ready', (evt) => {
    this.renderMovieDetailViews(evt.detail);
  });

};

MovieListView.prototype.renderMovieDetailViews = function (movies) {
  console.log(movies);
  movies.forEach((movie) => {
    const movieItem = this.createMovieListItem(movie);
    this.container.appendChild(movieItem);
    console.log(movieItem);
  });
};

MovieListView.prototype.createMovieListItem = function (movie) {
  console.log(movie);
  const movieDetailView = new MovieDetailView();
  console.log(movieDetailView);
  const movieDetail = movieDetailView.createMovieDetail(movie);
  return movieDetail;
};

module.exports = MovieListView;
