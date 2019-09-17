const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {type: String, required: true},
    date: {type: String, required: true},
    gender: {type: String, required: true},
    description: {type: String, required: true},
    videoPath: {type: String, required: true}
});

module.exports = mongoose.model('Movies',Movieschema);


