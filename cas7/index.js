const express = require("express");
const app = express();
const path = require("path");
const books = require("./books");

app.set("view engine", "ejs");

app.listen(3000);

// app.get("/", (req, res) => {
// 	var name = req.query.name;
// 	res.send("Hello " + name);
// })

// app.get("/users", (req, res) =>{
// 	res.send("Hello from Users page");
// })

// app.get("/home", (req, res) =>{
// 	res.sendFile(path.join(__dirname + "/home.html"));
// })


// app.get("/test", (req, res)=>{
// 	var name = "Marija";
// 	res.render("index", {firstName: name});
// })

var book1 = new books.create("1", "Book1", "Author1");
var book2 = new books.create("2", "Book2", "Author2");
var book3 = new books.create("3", "Book3", "Author3");
var book4 = new books.create("4", "Book4", "Author4");

var niza = [];
niza.push(book1);
niza.push(book2);
niza.push(book3);
niza.push(book4);
console.log(book1)
app.get("/book", (req, res)=>{
	let id = req.query.id;

	niza.forEach(b => {
		if(id == b.id){
			res.render("book", {book: b})
		}
	})

	res.render('error');

})

app.get("/listAll", (req, res)=>{
	res.render("books", {knigi: niza});
})