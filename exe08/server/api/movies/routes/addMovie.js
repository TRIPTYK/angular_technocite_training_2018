const Movie = require('../models/movie');
module.exports = {
  method: 'POST',
  path: '/api/movies',
  handler: async (req, h) => {
    console.log(req.payload);
    let movie = new Movie(req.payload);
    await movie.save();
    return movie;
  }
};
