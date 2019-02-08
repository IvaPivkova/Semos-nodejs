const express = require("express");
const app = express();
const myParser  = require("body-parser");
const session  = require("express-session");
const users = require("./users");
const auth = require("./auth");

app.set('view engine', 'ejs');
app.use(myParser.urlencoded({extended:true}));
app.use(session({secret: "test"}))

var sess;
var korisnici = [];

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
			flag = true;
			console.log(sess.email);
			res.render("profile");
		}
	}

	if(!flag) {
		res.redirect("/login");
	}
})

app.get("/movies", auth.isLogged, (req, res)=>{
	res.render('movies');
})