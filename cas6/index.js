const fs = require("fs");
const http = require("http");
const url = require("url");
const arcticles = require("./arcticles.js");

// fs.readFile("products.txt", "utf-8", (err, data) =>{
// 	if(err) throw err;

// 	var splittedData = data.split("\n");
// 	console.log(splittedData[0]);
// 	var total = 0;

// 	for(var i=0; i<splittedData.length; i++){
// 		var product = splittedData[i].split(" ");
// 		var quantity = product[1];
// 		var price = product[2];

// 		total += price * quantity;
// 	}

// 	console.log("total: " + total);


// })


// fs.readFile("products.json", "utf-8", (err, data) =>{
// 	if(err) throw err;

// 	var parsedData = JSON.parse(data);

// 	var total = 0;

// 	for(let i=0; i<parsedData.length; i++){
// 		let proizvod = parsedData[i];
// 		total += parsedData[i].price * parsedData[i].quantity;
// 	}

// 	parsedData.forEach(proizvod =>{
// 		total += proizvod.price * proizvod.quantity;
// 	})

// 	console.log(total);
// });

var article1 = new arcticles.create("1", "Ime 1", "Content ContentContentContentContent 1");
var article2 = new arcticles.create("2", "Ime 2", "Content ContentContentContentContent 2");
var article3 = new arcticles.create("3", "Ime 3", "Content ContentContentContentContent 3");
var article4 = new arcticles.create("4", "Ime 4", "Content ContentContentContentContent 4");

var niza = [];
niza.push(article1);
niza.push(article2);
niza.push(article3);
niza.push(article4);


http.createServer((req, res) => {

	if(req.url == "/articles"){
		var names = "";

		niza.forEach(a =>{
			names += a.name + "\n";
		})

		res.writeHead(200, "Success");
		res.write(names);
		res.end();
	}

	else{
		var query = url.parse(req.url, true).query;
		var queryID = query.id;

		niza.forEach(statija => {
			if(statija.id == queryID){
				var result = statija.name + "\n" + statija.content;

				res.writeHead(200, "Success");
				res.write(result);
				res.end();
			}
		})


	}

}).listen(8080);