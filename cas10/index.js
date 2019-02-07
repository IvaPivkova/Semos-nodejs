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

console.log(res2);
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

p1(5, 1).then(
	(data) =>{
		console.log("the result is", +data);
	},
	(err) =>{
		console.log(err);
	}
	)