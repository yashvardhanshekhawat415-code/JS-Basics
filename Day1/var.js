//variables
//let user = "Arjun" , age = 25 , price = 12; this also works but for the sake of readabilty not recommended
const name = "Arjun";
let age = 25;
const price = 11.99; // const has to be initialized directly otherwise error shows
 age = 26;
let hobbies = ["gaming", "fighting", "dancing"];
console.log(hobbies); 
console.log(hobbies[0]);
// constants- thses values cannot be changed
const sex = "good"
console.log(sex) 
//uppercase constants - for values that are known and do not change
const MAX_USERS = 100;
console.log(MAX_USERS) 

let message;
message = "hello"
message = "world" // data replaced in variable message
console.log(message)
//......................................................
//copying data of one variable to another
let boy = "gay";
let girl = boy;
console.log(girl);
//......................................................
// semicolon can be ommitted but not always
console.log(age);
console.log(price)
console.log(name)
const sum = 1 +
2-
1;
console.log(sum)
// garbage values
let my = 10;
let yours = my;
my = 5;
console.log(my);
console.log(yours);
/*This is one of the most important concepts in JavaScript.
For primitive values (number, string, boolean, null, undefined, bigint, symbol), assignment copies the value.
the variable d i not pointing to c but copies the value of c and store it.
c------> 10
d------>c wrong
d------>10 right
so when you reassign the value of c it does not affect d
*/