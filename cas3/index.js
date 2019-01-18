const person = require("./person.js");

var p1 = new person.create("John", "Doe", "23", "M");
var p2 = new person.create("John2", "Do2", "233", "F");

console.log(p1.getFullName());