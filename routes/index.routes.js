'use strict';

const express = require('express');

const router = express.Router();
const movieController = require('../controllers/movie.controllers');

router.get('/movies', movieController.getMovies);

module.exports = router;