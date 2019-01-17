// var niza = [2, 5, 10, 85, 4, 7, 9, 44];

// var parni = [];
// var neparni= [];

// for(let i=0; i < niza.length; i++) {
// 	if(niza[i] % 2 == 0){
// 		parni.push(niza[i]);
// 	}

// 	else{
// 		neparni.push(niza[i]);
// 	}
// } 

// console.log(parni)
// console.log(neparni)


// function soberi(a, b){
// 	return a+b;
// }


// var zbir = soberi(5, 10);
// console.log(zbir);


// function sayHi(){
// 	console.log("Hi from function");
// }

// sayHi();


// var x = function(){
// 	console.log("Hi from anonymous function");
// }

// console.log(x());


// (function(){
// 	console.log("function");
// }())




// var niza = ["hi", 7, 2, "sdfsf", 5, "fsdfsd", 10];

// function soberiSledbenik(broj){
// 	let sledbenik = broj + 1;
// 	return broj + sledbenik;
// }

// for(let i = 0; i < niza.length; i++){

// 	if(!isNaN(niza[i])){
// 		let zbir = soberiSledbenik(niza[i]);
// 		console.log(zbir);
// 	}
// }


// var person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	age: 24,
// 	gender: "M",

// 	getFullName: function(){
// 		return person.firstName + " " + person.lastName;
// 	},

// 	getNameAndAge: function(){
// 		return person.firstName + " " + person.age;
// 	}
// }

// var person1 = {
// 	firstName: "John",
// 	lastName: "Smith",
// 	age: 12,
// 	gender: "M",

// 	getFullName: function(){
// 		return person.firstName + " " + person.lastName;
// 	},

// 	getNameAndAge: function(){
// 		return person.firstName + " " + person.age;
// 	}
// }

// var person2 = {
// 	firstName: "Jane",
// 	lastName: "Doe",
// 	age: 15,
// 	gender: "M",

// 	getFullName: function(){
// 		return person.firstName + " " + person.lastName;
// 	},

// 	getNameAndAge: function(){
// 		return person.firstName + " " + person.age;
// 	}
// }

// var person3 = {
// 	firstName: "Jessica",
// 	lastName: "Alba",
// 	age: 28,
// 	gender: "M",

// 	getFullName: function(){
// 		return person.firstName + " " + person.lastName;
// 	},

// 	getNameAndAge: function(){
// 		return person.firstName + " " + person.age;
// 	}
// }


// var niza = [];
// niza.push(person, person1, person2, person3);

// //console.log(niza);

// for(let i=0; i<niza.length; i++){

// 	if(niza[i].age >= 18){
// 		//console.log(niza[i].getNameAndAge());
// 	}
// 	console.log(niza[i].getNameAndAge());
// }

var prop = {
	type: "flat",
	m2: "50",
	balcony: "5",
	price: "900",

	getFullPrice: function(){
		let fullPrice = (parseInt(this.m2) + parseInt(this.balcony)) * parseInt(this.price)
		return fullPrice;
	}
}

var prop1 = {
	type: "house",
	m2: "100",
	balcony: "5",
	price: "1000",

	getFullPrice: function(){
		let fullPrice = (parseInt(this.m2) + parseInt(this.balcony)) * parseInt(this.price)
		return fullPrice;
	}
}

var prop2 = {
	type: "house",
	m2: "60",
	balcony: "5",
	price: "900",

	getFullPrice: function(){
		let fullPrice = (parseInt(this.m2) + parseInt(this.balcony)) * parseInt(this.price)
		return fullPrice;
	}
}

var niza = [];
niza.push(prop, prop1, prop2);

console.log(niza);

for(let i=0; i<niza.length; i++){
	
	if(niza[i].type == "house" && niza[i].getFullPrice() < 100000){
		console.log(niza[i].type + " " + niza[i].getFullPrice());
	}
}

