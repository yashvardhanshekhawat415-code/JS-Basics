let var1 = "Killua";
var1 = '1234';
let var2 = 12.34;
console.log(var1);
console.log(typeof(var1));
console.log(typeof(var2));
console.log(1/0);
console.log('abc'/1);
let x = 11, y = 2 , z;
x=5;
y=6;
z = x + y;
console.log(z);
//var is function-scoped — it leaks out of if/for blocks. let and const are block-scoped — they live and die inside {}.
if(true){
    var a = 10;
    let b = 20;
    
}
console.log(a);
//console.log(b);  reference erroe will be shown here as b is block scoped 

// Operators
let c = 4; 
let b = 8;  // can use b but not a as i used var to declare it so it is already declared
console.log(c**b);
console.log(c+b);
console.log(c-b);
console.log(10%2);
console.log(10/4);
c = 5;
console.log(c);

//operators on string
let text1 = 'john';
let text2 = 'doe';
console.log(text1+" "+text2);
console.log(text1 += " doe");// for strings + is called concatenation operator
//increment opaerator
let xx  = 5;
xx++;
console.log(xx);

