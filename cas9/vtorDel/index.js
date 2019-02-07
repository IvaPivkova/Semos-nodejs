const users = require("./users");
const auth = require("./auth");
const express = require("express");
const app = express();
const session = require("express-session");
const myParser = require("body-parser");

app.use(session({secret: "hellooo"}))
app.set('view engine', "ejs");
app.use(myParser.urlencoded({extended: true}));

var user1 = new users.create("user@yahoo.com", "123", "user");
var admin = new users.create("admin@yahoo.com", "admin", "admin");

app.listen(3000);

app.get("/login", (req, res) =>{
	req.session.type = "test";

	console.log(req.session.type);
	res.send("OK");
})

app.get("/admin", auth.isAdmin, (req, res) =>{
	res.send("admins page");
})

app.get("/age", (req, res) => {
	res.render("age");
})

app.post("/age", auth.checkAge, (req, res)=>{
	
	res.send("Welcome to age page");
})

app.get("/notAllowed", (req, res)=>{
	res.send("Not allowed");
})

app.get("/users", auth.isUserOrAdmin, (req, res)=>{
	res.send("Welcome to users page");
})
