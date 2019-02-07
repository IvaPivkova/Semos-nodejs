exports.isAdmin = function (req, res, next) {
	if(req.session.type == "admin"){
		next();
	}
	else{
		res.send("Error");
	}

}

exports.checkAge = function(req, res, next){
	let age = req.body.age;
	if(age >= 16){
		next();
	}
	else{
		res.redirect("/notAllowed");
	}
}

exports.isUserOrAdmin = function(req, res, next){
	if(req.session.type == "user" || req.session.type=="admin"){
		next();
	}
	else{
		res.redirect("/notAllowed");
	}
}