
/*Use console.log to output the following criteria:

How many of each grade?
What is the lowest grade?
What is the highest grade?*/


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var grades = [];
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;
for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 91){
		grades[i] = "A";
		a++;
	}
	else if (scores[i] >= 81) {
		grades[i] = "B";
		b++
	}
	else if (scores[i] >= 71) {
		grades[i] = "C";
		c++
	} 
	else if (scores[i] >= 61) {
		grades[i] = "D";
		d++
	}
	else {
		grades[i] = "F";
		f++
	}
}

console.log("There are " + a + " A's, " + b + " B's, " + c + " C's, " + d + " D's, and " + f + " F's");

var min = scores[0];
for (var i = 1; i < scores.length; i++) {
	if (scores[i] < min) {
		min = scores[i];
	}
}

console.log("The lowest score is " + min);

var max = scores[0];
for (var i = 1; i < scores.length; i++) {
	if (scores[i] > max) {
		max = scores[i];
	}
}

console.log("The highest score is " + max);







