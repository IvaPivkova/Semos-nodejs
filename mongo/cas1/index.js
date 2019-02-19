const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://admin:admin01@ds343895.mlab.com:43895/cas1";
var db;

MongoClient.connect(url, function(err, client){
	db = client.db('cas1');
	console.log("connected");

	db.createCollection("test");

	var myObj = {
		name: "Maria",
		age: "15"
	}

	// db.collection("users").insertOne(myObj, function(err, res) {
	// 	if(err) throw err;

	// 	else{
	// 		console.log("New document added");
	// 	}

	// })

	var myArray = [
		{name: "Jane", age: 20},
		{name: "Maria", age: 25}
	]

	// db.collection("users").insertMany(myArray, function(err, res) {
	// 	if(err) throw err;
	// 	else{
	// 		console.log(res.insertedCount + " elements have been added");
	// 	}
	// })

	// db.collection("users").findOne({name: "Maria", age: 25}, function(err, res){
	// 	if(err) throw err;
	// 	else{
	// 		console.log(res);
	// 	}
	// })

	// db.collection("users").find({name: "Maria"}).toArray(function(err, res){
	// 	if(err) throw err;
	// 	else{
	// 		console.log(res);
	// 	}
	// })

	db.collection("users").deleteOne({name: "Jane"}, function(err){
		if(err) throw err;
		else{
			console.log("1 element deleted")
		}
	})

	var myQuery = {name: "test"};
	var newValues = {$set: {age: 30}};
	db.collection("users").updateOne(myQuery, newValues, function(err){
		if(err) throw err;
		else{
			console.log("1 document updated");
		}
	})

})
