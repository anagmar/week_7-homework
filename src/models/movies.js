const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Movies = function (){
  this.movie = [];
}

Movies.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://ghibliapi.herokuapp.com/films')
  requestHelper.get((data) => {
    PubSub.publish('Movies:movies-ready',data)
  });

}

module.exports = Movies;
