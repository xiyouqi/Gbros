/**
 * New node file
 */
var trans = require("../src/trans.njs");
var ss = "客户名";

console.log(trans.getTrans(ss));

var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
console.log(newstr);

/*var flength = ss.length;
for(var i = 1; i < flength; i++){
	var prev = ss.substring(0,flength-i);
	var rear = ss.substring(flength-i,flength);
	console.log(prev);
	console.log(rear+"\n");
}*/