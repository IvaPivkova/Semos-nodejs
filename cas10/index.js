const fetch = require("node-fetch");

var sobiraj = function (a, b){
	return a+b;
}

var calc = function (c, d, fn){

	return fn(c, d);
}

var res = calc(1, 2, sobiraj);
console.log(res);

var res2 = calc(2, 3, function(x, y){
	return x * y;
})

//console.log(res2);
//console.log(sobiraj(10, 10));

var p1 = (a, b) =>{
	return new Promise((success, fail) =>{
		var sum = a + b;
		if(sum > 10){
			return success(sum);
		}
		else{
			return fail("Number is too small");
		}
	})
};

var p2 = (a, b) =>{
	return new Promise((success, fail) =>{
		let razlika = a - b;
		if(a >= b){
			return success(razlika)
		}
		else{
			return fail("not valid numbers");
		}

	})
}
// p2(15, 5)
// 		.then(
// 			(data) => {
// 				return p1(data, 2);
// 			},
// 			(err) =>{
// 				console.log(err)
// 		})
// 		.then(
// 			(data) =>{
// 				console.log(data);
// 			},
// 			(err)=>{
// 				console.log(err);
// 			})


function isOnline(a) {
	return new Promise ((success, fail) =>{

		if(a >= 5){
			return success("is online");
		}
		else{
			return fail ("not online");
		}
	})
}

// isOnline(15)
// 		.then(
// 			(data) => {
// 				return console.log(data);
// 			},
// 			(err) =>{
// 				console.log(err)
// 		})


function returnTaskIfCompleted(){
	return new Promise( (success, fail) =>{
		fetch('https://jsonplaceholder.typicode.com/todos/50')
		.then( response =>{
			return response.json();
		})

		.then(value => {
			if(value.completed == true){
				success(value);
			}
			else{
				fail("not completed")
			}
			
		})
	})
}

returnTaskIfCompleted().then(
	success => console.log(success),

	fail => console.log(fail)

)