const Movie = require('../models/movie');
const Boom = require('boom')
module.exports = {
  method: 'POST',
  path: '/api/movies',
  handler: async (req, h) => {
    console.log(req.payload);
    try {
      let movie = new Movie(req.payload);
      await movie.save();
      return movie;
    } catch (e) {
      return Boom.boomify(error, {
        statusCode: 400
      });
    }

  }
};