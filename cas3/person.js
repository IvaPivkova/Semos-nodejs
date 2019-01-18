exports.create = function(fn, ln, age, gender){
	this.firstname = fn;
	this.lastname = ln;
	this.age = age;
	this.gender = gender;
}

exports.create.prototype.getFullName = function(){
	return this.firstname + " " + this.lastname;
}