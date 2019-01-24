const http = require('http');
const url = require('url');


// http.createServer((request, response) =>{
// 	console.log(request);

// 	if(request.url == "/home"){
// 		response.writeHead(200, "OK");
// 		response.write("Home page");
// 		response.end();
// 	}

// 	else if(request.url == "/profile"){
// 		response.writeHead(200, "OK");
// 		response.write("My profile");
// 		response.end();
// 	}

// 	else{
// 		response.writeHead(400, "OK");
// 		response.write("Error");
// 		response.end();
// 	}

// }).listen(3000);

var niza = ['iva', 'ana', 'marija', 'marko', "martin"];


 // http.createServer((request, response) =>{
 // 	var query = url.parse(request.url, true).query;

 // 	var q1 = query.name;
 // 	var flag = false;

 // 	for(let i=0; i< niza.length; i++){
 // 		if(niza[i] == q1){
 // 			flag = true;

 // 			response.writeHead(200, "OK");
 // 			response.write("Hello " + niza[i]);
 // 			response.end();
 // 		}
 // 	}

 // 	if(flag == false){
 // 		response.writeHead(404, "Error");
 // 		response.write("Page not found");
 // 		response.end();

 // 	}



 // }).listen(3000);

var colors = ["red", "yellow", "blue", "pink"];
var shapes = ["rectangle", "circle", "triangle"];

http.createServer((request, response) =>{
	var query = url.parse(request.url, true).query;

	var q1 = query.color;
	var q2 = query.shape;

}).listen(3000);