exports.isLogged = function(req, res, next){
	if(req.session.email){
		next();
	}
	else{
		res.redirect("/login");
	}
}

exports.isAdmin = function(req, res, next) {

	if(req.session.type == "admin"){
		next();
	}
	else{
		res.redirect("/profile");
	}

}