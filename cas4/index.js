const fs = require("fs");

// fs.readFile("example.txt", "utf-8", (err, data) =>{
// 	if(err) {
// 		console.log("greska");
// 	}
// 	else{
// 		console.log(data);
// 	}

// })

// fs.appendFile("example.txt", "\nТест", (err) =>{
// 	if(err) throw err;
// 	else{
// 		console.log("Uspesno zapisano");
// 	}

// })


//Find users in json

// fs.readFile('users.json', "utf-8", (err, data) =>{
// 	if (err) throw err;

// 	else {
// 		var parsedJSON = JSON.parse(data);
// 		var name = "Sanja";
// 		var exists = false;
// 		//console.log(parsedJSON);
// 		for(let i=0; i < parsedJSON.length; i++){
// 			if(parsedJSON[i].name == name){
// 				console.log("Postoi");
// 				exists = true;
// 			}
// 		}

// 		if(exists == false){
// 			console.log("ne postoi");
// 		}
// 	}
// })

//Find info about a city
fs.readFile('weather.json', "utf-8", (err, data) =>{
	if (err) throw err;

	else {
		var parsedJSON = JSON.parse(data);
		var name = "Skopje";
		var exists = false;

		for(let i=0; i < parsedJSON.length; i++){
			if(parsedJSON[i].city == name){
				console.log("Temperaturata vo " + parsedJSON[i].city + " e " + 
					parsedJSON[i].temp + " , a casot e " + parsedJSON[i].time);
				exists = true;
			}
		}

		if(exists == false){
			console.log("Ne postojat informacii za " + name);
		}
	}
})



const validator = require("./validator.js");
var email = "sdfsdf@yahoo.com";
var pass = "dfgdfg"


if(validator.validatePassword(pass) && validator.validateEmail(email)){
	console.log("Uspesna registracija");
}

else{
	console.log("neuspesna registracija");	
}