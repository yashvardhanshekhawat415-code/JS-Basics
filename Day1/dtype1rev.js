let name = "arjun";
//console.log(typeof name);
console.log(typeof(name));
// name.toUpperCase() here there is no re-assignment it just returns the new string 
name = name.toUpperCase();
console.log(name);
//initializer
let game;  // let and var can be initialized later
game = "manor lords";
console.log(game);
/*
const room; const must be initialized immidiately
room = 214;
console.log(room);
*/
console.log(typeof(NaN));//number -  It is also the only value in JavaScript that is not equal to itself.
console.log(typeof typeof 5)//string
let person_name = "Arjun";
person_name = person_name.toUpperCase();
person_name[1] = "x"; // it does nothing
console.log(person_name[1]);
//isNaN() Vs Number.isNaN() always use ----> Number.isNaN()
console.log(isNaN("abc"));// isNaN does type conversion then checks. it firsts try to convert string to number fails and gives NaN which is nan misleading
console.log(Number.isNaN("abc"))//false
