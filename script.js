$(document).ready(function() {

	var body = $("body"); 

	$("#button").click(function() { 
		body.toggleClass("play");
	});


});

var spin = ["spin1", "spin2", "spin3", "spin4", "spin5", "spin6", "spin7","spin8","spin9","spin10","spin11","spin12"];


var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
console.log(random, months[random]);