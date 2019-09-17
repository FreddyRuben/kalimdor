'use strict';

const Movie = require('../models/Movie');

const movieCtr = {};

movieCtr.getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
}

movieCtr.createMovies = async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        date: req.body.date,
        gender: req.body.gender,
        description: req.body.description,
        videoPath: req.body.videoPath
    });

    await movie.save()
    
    res.json({status: "Saved Succesfully"});
}

module.exports = movieCtr