// console.log("Hi from Node");

// var integer1 = 5;
// var integer2 = null;

// var sum = integer1 + integer2;

// console.log("Zbirot na" + integer1 + " i " + integer2 + "e " + sum);
// var test = 'PrObA';
// var testToLowercase = test.toLowerCase();

// console.log(testToLowercase);

// var name = 'Iva';
// var pass = "00000";

// if(name.toLowerCase() == 'iva' && pass == "00000"){
// 	console.log("Uspesno registriran korisnik")
// }
// else{
// 	console.log("Neuspesno registriran korisnik")
// }

// var string1 = "Ananas";
// var string2 = "anaa";


//console.log(string1.includes(string2));
//console.log(isNaN(string1));

// var i = 5;

// console.log(i++);
// console.log(i);

// for(let i = 0; i < 5; ++i){
// 	console.log(i);
// }

// let i = 0;
// while(i <= 10) {
// 	console.log(i);
// 	i++;
// }

// var niza = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(let i = 0; i < niza.length; i++){
// console.log(niza[i] + ": ")

// if(niza[i] % 2 == 0){
// 	console.log("buzz");
// }

// if(niza[i] % 4 == 0){
// 	console.log("fizz");
// }

// }

// var niza1 = [1, "welcome", "to", 5, 6, 56, "node.js"];
// var rezultat = '';

// for(let i = 0; i < niza1.length; i++){
// 	if(isNaN(niza1[i])){
// 		rezultat += niza1[i] + " ";
// 	}
// }

// console.log(rezultat);

var username = ["iva", "ana", "marija"];
var passwords = ["121", "000", "7897"];

var user = 'ana';
var pass = "000";
var isLogged = false;


for(let i = 0; i < passwords.length; i++){

	if(username[i] == user && passwords[i] == pass){
		console.log("uspesno logiran");
		isLogged = true;
		break;
	}

}

if(isLogged == false){
	console.log("neuspesno logiran");
}


















