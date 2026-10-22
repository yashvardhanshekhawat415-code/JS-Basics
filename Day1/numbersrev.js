/* toFixed() formats a number to a specified number of digits after the decimal point and returns the ****result
as a string****, not a number.*/

let price = 19.999;
let newPrice = price.toFixed(2);
console.log(newPrice)//20
console.log(typeof(newPrice))// string
console.log((12.345).toFixed(2))// 12.35
console.log((12.345).toFixed(0))// 12
console.log(typeof (12.345).toFixed(2))// string

/* Math.round() - ****returns a number rounded to the nearest integer *****. If the fractional part is exactly halfway, 
JavaScript rounds toward positive infinity.*/ 

console.log(Math.round(4.56200))//5
console.log(typeof Math.round(4.56200))//Number
console.log(Math.round("4.56200"))// 5 - auto converts string to number
console.log(Math.round(3.5))//4
console.log(Math.round(-3.5))//-3
console.log(Math.round(0))//0

// Math.ceil() - It always rounds up toward positive infinity, not necessarily away from zero.

console.log(Math.ceil(4.2))// 5
console.log(typeof Math.ceil(4.2))// number
console.log(Math.ceil(4.8))// 5
console.log(Math.ceil(4))// 4
console.log(Math.ceil(-3.5))// -3

// Math.trunc() removes the decimal part of a number without rounding. It simply cuts off everything after the decimal point.

console.log(Math.trunc(4.9))// 4
console.log(Math.trunc(4.1))// 4
console.log(Math.trunc(-4.9))// 4
console.log(typeof Math.trunc(4.9))// number

//Math.abs() returns the absolute value of a number — its distance from zero, without a negative sign. It returns a number.
//just removes negative sign

console.log(Math.abs(-15))// 15
console.log(Math.abs("-15"))// 15
console.log(Math.abs(5))// 15
console.log(typeof Math.abs(0))// number

// Math.max() returns the largest number among its arguments, while Math.min() returns the smallest. Both return a number.

console.log(Math.max(4, 12, 7)) // 12
console.log(Math.min(4, 12, 7)) // 4

console.log(Math.max(-5, -2, -10)) // -2
console.log(Math.min(-5, -2, -10)) // -10

console.log(Math.max(5)) // 5
console.log(Math.min(5)) // 5

console.log(Math.max()) // -Infinity
console.log(Math.min()) // Infinity

//Math.random() - generates a random decimal between 0 (included) and 1 (excluded).

console.log(Math.random())// random decimal between 0 and 1(excluded)
console.log(typeof Math.random())// number
console.log(Math.random() <= 1)// true
console.log(Math.random() < 1)// true
console.log(Math.random() >= 0)// true

/* parseInt() reads an integer from a value and returns a number.
The second argument, 10, tells JavaScript to interpret the digits using the decimal (base-10) number system*/

/*The 10 tells JavaScript to read the digits in base 10, our usual number system, using digits 0 through 9.

You can think of it as telling JavaScript, "Interpret this text as an ordinary decimal integer." */

console.log(parseInt("42", 10))// 42
console.log(parseInt("42.9", 10))// 42
console.log(parseInt("42.9"))// 42 works without ( , 10) also.
console.log(parseInt("abc45", 10))// NaN- AS parseInt() reads from left to right and tries to find an integer at the beginning of the string.
console.log(parseInt("42px", 10))// 42
console.log(typeof parseInt("42", 10))// number