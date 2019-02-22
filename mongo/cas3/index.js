const express = require('express');
const multer = require('multer');
const mongoose = require("mongoose");
const Movie = require('./models/movie');
var url = "mongodb://admin:admin01@ds147125.mlab.com:47125/cas2";
var app = express();
const myParser = require('body-parser');
app.set(myParser.urlencoded({extended:true}));

app.use(express.static("uploads"));
app.set("view engine", "ejs");

mongoose.connect(url);
app.listen(3000);

var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './uploads')
	},

	filename: function(req, file, cb){
		cb(null, file.originalname)
	}
})

var upload = multer({storage: storage})

app.get("/addMovie", function(req, res){
	res.render("uploadImage");

})

app.post("/uploadImage", upload.single('image'), function(req, res){
	console.log(req.file);
	let newMovie = new Movie({
		title: req.body.title,
		length: req.body.length,
		img: req.file.filename
	});

	newMovie.save();
	res.render("displayMovie", {movie: newMovie});
})

// app.get("/listMovies", function(req, res){
// 	Movie.find({title: {$regex: /^M/} }, function(err, result){
// 	if(err) throw err;
// 		else{
// 			//console.log(result);
// 			res.render('listMovies', {movies: result})
// 		}

// })
// })