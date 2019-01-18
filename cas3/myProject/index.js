const fs = require('fs');

fs.readFile('myFile.txt', "utf-8", (err, data) => {
	if(err) throw err;
	else{
		console.log(data);
	}


})

fs.writeFile('myFile.txt', "Data to be saved", (err) => {
	if(err) throw err;
	else{
		console.log("Podatocite se uspesno zapisani.");
	}

})

