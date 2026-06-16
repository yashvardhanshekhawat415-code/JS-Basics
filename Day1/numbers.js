//simple addition
let x = 10;
let y = 20;
let z = x+y;
console.log(z); 
//js interpreter works from left to right
//if you add a number and a string the result will be a string
let a = 10;
let b = 20;
let c = '30';
let d = a +b+c // 10+20 = 30 then string concatenation 3030
console.log(d);//3030
console.log(typeof(d)); // string as i said
//here js will make it number due to this 
let e = '10';
let f = '20';
let g = e/f;// all */- works except +
//example of +
let h = e+f;
console.log(g);
console.log(h);
// isNaN() function
let ans = 100/ "apple";
console.log(isNaN(ans));
console.log(typeof(ans));
// == and ===
let ab = 12;
let bb = new String('12');
console.log(ab==bb);// true beacuse of type conversion
console.log(ab===bb); // false
//using exponential on numbers
let num = 5;
let num2 = num**2;
let xx = Math.pow(num,2);
console.log(num2);
console.log(xx);
//Number utility methods Number(), parseInt(), parseFloat(), toFixed(), Number.isInteger()

let goku = '42aba';
console.log(Number(goku)); // NaN as it tries to convert it but fails
console.log(Number('42'));
console.log(Number(''));
console.log(Number('true'));
console.log(Number(true));
//paresInt()
let vegeta = '42abC';
let result1 = parseInt(vegeta);
console.log(result1);
console.log(parseInt('3.99')); // cannot work with decimal
console.log(parseInt('xyz42'));// not starting with integer
//parseFloat()
console.log(parseFloat('42.139ab'));
//toFixed(n)
let price = 19.999;
console.log(price.toFixed(2));
//Number.isInteger()
console.log(Number.isInteger("2"));
console.log(Number.isInteger(2));
console.log(Number.isInteger(2.99));