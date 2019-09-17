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

movieCtr.createMovies = async (req, res) => {

    console.log(req.file.path);

    const newMovie = new Movie({
        title: req.body.title,
        date: req.body.date,
        gender: req.body.gender,
        description: req.body.description,
        videoPath: req.file.path
    });
    const movie = new Movie(newMovie)
    await movie.save()
    return res.json({message: "Saved Succesfully", status: movie});
}

movieCtr.deleteMovie = async (req,res)=>{
    await Movie.findByIdAndDelete(req.params.id);
    res.json({"status":"movie successfully removed .."});

}

module.exports = movieCtr
