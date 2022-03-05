var a = parseInt(prompt("Ente first number"));
var b = parseInt(prompt("Enter second number"));

//isse agar addition and substraction se swap krte h  to nhi hoga bcz string rhega (agar array se krte h to swapping hoga bcz array me kuch bhi pass kr skte hai)
// var a = prompt("Ente first number");
// var b = prompt("Enter second number");

//isse only number swap krwa sakte hai
a = a + b;
b = a - b;
a = a - b;

//isse string bhi swap krwa sakte h
// [a, b] = [b, a];

console.log("value of a after swapping:" + a);
console.log("value of b after swapping:" + b);

document.write("value of a after swapping: " + a);
document.write("<br>");
document.write("value of b after swapping: " + b);
