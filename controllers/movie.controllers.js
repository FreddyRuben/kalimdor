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
    console.log(req.body);
    const newMovie = new Movie({
        title: req.body.title,
        date: req.body.date,
        gender: req.body.gender,
        description: req.body.description,
        videoPath: req.file.path
    });
    console.log(req.file.path);
    const movie = new Movie(newMovie)
    await movie.save()
    return res.json({message: "Movie Saved Succesfully", movie: movie});
}

movieCtr.updateMovie = async(req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        date: req.body.date,
        gender: req.body.gender,
        description: req.body.description
    }, {new: true});
    res.json({message: "Movie Succesfully Updated", movie: movie});
}

movieCtr.deleteMovie = async (req,res)=>{
    await Movie.findByIdAndDelete(req.params.id);
    res.json({"status":"Movie Successfully Removed"});

}

module.exports = movieCtr
