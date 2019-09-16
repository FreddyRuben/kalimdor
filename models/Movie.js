'use strict'
const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const Movieschema = new Schema({
    title:{type:String,required:true},
    date:{type:Date,required:true},
    gender:{type:String,required:true},
    description:{type:String,required:true}
});

module.exports = mongoose.model('Movies',Movieschema);