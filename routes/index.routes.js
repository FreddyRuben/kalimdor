'use strict';

const express = require('express');
const multer = require('../libs/multer');

const router = express.Router();
const movieController = require('../controllers/movie.controllers');

router.get('/movies', movieController.getMovies);
router.post('/movies', multer.single('videoPath'), movieController.createMovies);
router.get('/movies/:id',movieController.getMovie);
router.put('/movies/:id', movieController.updateMovie);
router.delete('/movies/:id',movieController.deleteMovie);


module.exports = router;