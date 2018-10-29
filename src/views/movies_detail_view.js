const MovieDetailView = function () {

}

MovieDetailView.prototype.createMovieDetail = function (movie) {
  const movieDetail = document.createElement('div');
  movieDetail.classList.add('movie-detail');

  const name = document.createElement('h3');
  name.textContent = movie.title;
  movieDetail.appendChild(name);

  const detailsList = document.createElement('ul');
  const director = this.createDetailListItem('Director', movie.director);
  detailsList.appendChild(director);

  const release_date = this.createDetailListItem('Year', movie.release_date)
  detailsList.appendChild(release_date);

  movieDetail.appendChild(detailsList);
  return movieDetail;
};

MovieDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = MovieDetailView;
