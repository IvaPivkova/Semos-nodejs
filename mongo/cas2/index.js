var mongoose = require("mongoose");
var url = "mongodb://admin:admin01@ds147125.mlab.com:47125/cas2";
var User = require("./models/users");

mongoose.connect(url);

var myUser = new User({
		name:"Iva",
		username: "Iva",
		age: 25
});

// myUser.save(function(err){
// 	if(err) throw err;

// 	else console.log("new user saved");
// })

// User.find({username: "Iva"}, function(err, result){
// 		if(err) throw err;
// 		else{
// 			console.log(result);
// 		}

// })

// User.find({username: {$regex: /tk/} }, function(err, result){
// 	if(err) throw err;
// 		else{
// 			console.log(result);
// 		}

// })

// User.find().where('age').lt(20).exec(function(err, result){
// 	if(err) throw err;
// 	else console.log(result);
// })

// User.find({age: {$gt: 20, $lte: 30}}, function(err, result){
// 	if(err) throw err;
// 	else console.log(result);
// })


// User.find({age: {$lt: 20}, username: {$regex: /[1, o]$/}}, function(err, result){
// 	if(err) throw err;
// 	else console.log(result);
// })


User.findOneAndUpdate({name: "Blagoj"}, {username: "Username Changed"}, 
	function(err, result){
		if(err) throw err;
		else{
			console.log(result);
		}
	})


User.findOneAndRemove({username: "Iva1"}, function(err){
	if(err) throw err;
	else console.log("User deleted")
})