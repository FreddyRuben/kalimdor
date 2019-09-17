'use strict';

const Movie = require('../models/Movie');

const movieCtr = {};

movieCtr.getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
}

movieCtr.getMovie = async (req,res) => {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
}
movieCtr.deleteMovie = async (req,res)=>{
    await Movie.findByIdAndDelete(req.params.id);
    res.json({"status":"movie successfully removed .."});

}
module.exports = movieCtr
