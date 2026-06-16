
//datatype can be changed dynamically and are declared dynamically
let message = "hello"
message = 12345
let n = 1234
n = 12.34
console.log(n)
console.log(message)
//infinity
console.log(1/0)
//(NaN-remember) undefined - any other function on nan gives nan
console.log("abc"/2)
console.log("abc"/2*25)
console.log(NaN+5)

//String even when is primitive, js temporarily converts it into a string object to use these props - AUTOBOXING
let momo = "lets do it";
console.log(momo.includes("do"));
console.log(momo.startsWith("dokomo"));
let person_name = "Arjun";
console.log(person_name.length);
//experiment
let a = typeof(person_name);
console.log(a);
// strings are immutable they cannot change , if you want to modify them then store the value somewhere
person_name = person_name.toUpperCase();
console.log(person_name);
console.log(typeof(person_name));
console.log(person_name.toUpperCase());
console.log(person_name); 
console.log(person_name.toLowerCase());
console.log(person_name);// this proves that it does not modify the string as we should have got arjun
console.log(person_name[1]);
//AUTOBOXING- this is what happens 
console.log("hello".length);
/* let temp = new String("hello");
console.log(temp.length); */


