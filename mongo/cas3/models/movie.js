const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var movieSchema = new Schema({
	title: {type: String, required: true},
	length: Number,
	img: {type: String}
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;