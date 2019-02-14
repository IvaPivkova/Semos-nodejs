const express = require("express");
const app = express();
const myParser  = require("body-parser");
const session  = require("express-session");
const users = require("./users");
const movies = require("./movies");
const auth = require("./auth");

app.set('view engine', 'ejs');
app.use(myParser.urlencoded({extended:true}));
app.use(session({secret: "test"}))

var sess;
var korisnici = [];
var filmovi = [];

var admin = new users.create("admin", "admin@yahoo.com", "000000", "admin");
korisnici.push(admin);

app.listen(3000);

app.get("/", (req, res)=>{
	res.render("index");
})

app.get("/login", (req, res)=>{
	res.render("login");
})

app.post("/login", (req, res)=>{
	let email = req.body.email;
	let pass = req.body.pass;
	let flag = false;

	for(let i=0; i<korisnici.length; i++){
		if(korisnici[i].email == email && korisnici[i].pass == pass){
			sess = req.session;
			sess.email = email;
			sess.type = korisnici[i].type;
			flag = true;
			console.log(sess.email);
			console.log(sess.type);
			res.redirect("/profile");
		}
	}

	if(!flag) {
		res.redirect("/login");
	}
})

app.get("/profile", auth.isLogged, (req, res) =>{
	res.render("profile");
})

app.get("/movies", auth.isLogged, (req, res)=>{
	res.render('movies', {videa: filmovi});
})

app.get("/register", (req, res) =>{
	res.render("register");
})

app.post("/register", (req, res)=>{
	let fname = req.body.fname;
	let email = req.body.email;
	let pass = req.body.pass;

	let result = checkForEmail(email);
	console.log(result);

	if(!result){
		let user = new users.create(fname, email, pass, "user");
		korisnici.push(user);
		console.log(korisnici);
		res.redirect("/login");
	}

	else{
		res.redirect("/register");
	}


})

app.get("/addMovie", auth.isAdmin, (req, res) =>{
	res.render("addMovie");
})

app.post("/addMovie", (req, res) =>{
	var title = req.body.title;
	var year = req.body.year;
	var genre = req.body.genre;
	var desc = req.body.description;

	var movie = new movies.create(title, desc, genre, year);
	filmovi.push(movie);
	console.log(filmovi);

	res.redirect("/movies");

})

app.get("/showMovie", (req, res) =>{
	let title = req.query.title;

	for(let i=0; i<filmovi.length; i++){
		if(filmovi[i].title == title){
			res.render("movieDetails", {film: filmovi[i]})
		}
	}
})

// checks if there is already user with the email
function checkForEmail(mail){
	for(let i=0; i<korisnici.length; i++){
		if(korisnici[i].email == mail){
			return true;
		}
	}

	return false;
}