// Template literals (backticks) - Make strings easier to read and allow
// interpolation. Often preferred over concatenation for readability.

// String interpolation
const name = 'Arjun';
const repo = 30.01;

console.log(`My name is ${name} and my repo count is ${repo}.`);
console.log(`My name is ${name.toUpperCase()} and my repo count is ${Math.floor(repo)}.`);
console.log(`My name is ${88989} and my repo count is ${false}.`); //takes any expression, not just variables but also arithmetic or ternary 

// Primitive string
let game = "black/white";

console.log(game);
console.log(typeof game); // "string"

// Primitive strings can access properties and methods through JavaScript's
// built-in string functionality. This is commonly described as autoboxing.
// The primitive variable remains a string; it does not become an object.

console.log(game.toUpperCase()); // "BLACK/WHITE"
console.log(game.length);        // 11

// Explicitly created String object using the new keyword
let gameName = new String('mariocart');

console.log(gameName);        // [String: 'mariocart'] (Node.js output)
console.log(typeof gameName); // "object"

let a = 'hello';
let b = new String('hello');
console.log(a==b) //true
console.log(a === b); // false --> Hence it proves there types are different even when there value is same.
