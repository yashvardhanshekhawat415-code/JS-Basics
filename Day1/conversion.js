let score = "99"; // also check with null, undefined , true
console.log(typeof score);
let isNumber = Number(score); // conversts variable value to number 
console.log(isNumber);//99
console.log(typeof isNumber);//number

let score2 = "9abcd";
let isNumber2 = Number(score2);// will not be able to completely convert the string to a number and will return NaN
console.log(isNumber2);//-------> This will show NaN
console.log(typeof isNumber2);//---> Still it shows  number as its type
console.log(Number.isNaN(isNumber2))//true

let isLoggedIn = 1  // ""--> false  "abc"---->true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

//type coercion
console.log(1 + 2);       // 3
console.log(1 + "2");     // "12"
console.log("1" + 2);     // "12"
console.log("1" + 2 + 3); // "123"
console.log(1 + 2 + "3"); // "33"
console.log(1 + (2 + "3")); // "122"
/*
JavaScript is a dynamically typed language.

The `+` operator has two main behaviors:
1. Numerical addition: When both operands are numeric values.
2. String concatenation: When string conversion is triggered by a string operand.

This behavior involves a process called type coercion, where JavaScript automatically converts values from one type to another.
*/

//prefix and postfix
let x = 5
x = x++ //The assignment b = ... puts the saved value 5 back into b, replacing 6.
console.log(x);

