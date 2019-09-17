'use strict';

const express = require('express');

const router = express.Router();
const movieController = require('../controllers/movie.controllers');

router.get('/movies', movieController.getMovies);
router.post('/movies', movieController.createMovies);
router.get('/movies/:id',movieController.getMovie);
router.get('/movies/:id',movieController.deleteMovie);
router.delete('/movies/:id',movieController.deleteMovie);


module.exports = router;