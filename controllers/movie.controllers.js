'use strict';

const Movie = require('../models/Movie');

const movieCtr = {};

movieCtr.getMovies = async (req, res) => {

    const movies = await Movie.find();
    res.json(movies);

}

module.exports = movieCtr