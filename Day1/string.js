

// let points to the new refernce (reassignment) of boy created which is goy but the original string is still boy 
let girl = "boyboy ";
 girl = girl.replace('b','g');
 console.log(girl);
//const does not allow reassignment so not possible in it
 const boy ="Arjun";
 const new_boy = boy.replace("Ar", "Ra");
 console.log(boy);
 console.log(new_boy);
 //--------------->backticks **** imp*****
 //String interpolation
 const name = 'Yashvardhan'
 let repocount = 3
 console.log(`My name is ${name} and my repocount is ${repocount}` )

// now i will just ceate new strings and not reassign them 
const ex1 = "Plaqboymax";
console.log(ex1[5])
console.log(ex1.replace('P','c'));
console.log(ex1.replaceAll('a', 'A'));
console.log(ex1.split('b'));
let len = ex1.length;
console.log(len);
console.log(ex1.includes('Plaq'));
console.log(ex1.indexOf('Plaq')); // gives back the index of first element in the substring
console.log(ex1.indexOf('a')); 
console.log(ex1.startsWith('a')); 
console.log(ex1.endsWith('x')); 
console.log(ex1.toUpperCase()); 
console.log(ex1.toLowerCase()); 
console.log(ex1.at(-2)); // at() supports negative indexing 
console.log(ex1.charAt(3)); //charAt() does not support negative indexing and if out of bounds then return "" 
let ex2 = ' lowtiergod ';
console.log(ex2);
console.log(ex2.trim());  // removes extra space from start and end

const newstring = ex2.substring(0,4); // substring donot work with -indexing and ignores and starts with 0
console.log(newstring);
//slice
const anotherstr = ex2.slice(-10 , -5);
console.log(anotherstr);
//repeat
console.log(ex2.repeat(2));
console.log("q ".repeat(5));
//padStart and padEnd
console.log(ex1.padStart('15' , 'l'));
console.log("25".padStart("5", "0")); //00025 useful of IDs
console.log("Arjun".padEnd("8", "."));