const express = require("express");
const users = require("./users");
const app = express();
const myParser = require("body-parser");
app.use(myParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.listen(8000);

var u1 = new users.create("admin", "admin", "admin@yahoo.com", "000000");
var u2 = new users.create("John", "Doe", "john@yahoo.com", "000000");

var niza = [];
niza.push(u1, u2);

app.get("/", (req, res) =>{

	res.render("index");
})

app.get("/users", (req, res)=>{
	res.render("allUsers", {korisnici: niza})
})

app.get("/register", (req, res)=>{
	res.render("register");
})

app.post("/register", (req, res)=>{
	let fname = req.body.firstname;
	let lname = req.body.lastname;
	let email = req.body.email;
	let pass1 = req.body.pass1;
	let pass2 = req.body.pass2;

	if(pass1 == pass2){
		let newUser = new users.create(fname, lname, email, pass1);
		niza.push(newUser);

		res.redirect('/users');
	}
	else{
		res.render('register');
	}
})

app.get("/login", (req, res)=>{
	res.render("login");
})

app.post("/login", (req, res)=>{
	let email = req.body.email;
	let pass = req.body.pass;
	let flag = false;

	for(let i=0; i< niza.length; i++){
		if(niza[i].email == email && niza[i].pass == pass){
			flag = true;
			res.render("userProfile", {korisnik: niza[i]});
		}
	}

	if(!flag){
		res.redirect('/login');
	}

})