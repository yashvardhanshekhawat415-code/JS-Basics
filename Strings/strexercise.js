// truthly and falsly values
/*-----> Whenever JavaScript expects a boolean, it automatically converts values to either true or false.
falsly values are ---> false , 0 , -0, nan , undefined , "" , null
truthly values are everything except them */

// indexof() bug

console.log("apple".indexOf("a"))//0-->falsly
console.log("apple".indexOf("z"))//-1-->truthly

if("apple".indexOf("a")){console.log("Found")} else {console.log("not found")}
if("apple".indexOf("z")){console.log("Found")} else {console.log("notfound")}
/*The problem: if (str.indexOf("a")) asks “is this number truthy?”. That’s the wrong question, because a position of 0 is a 
valid find and a result of -1 is a miss, and truthiness gets both backwards.

The fix: str.indexOf("a") !== -1 asks “is this number not -1?”. A comparison like !== always gives a real true or false,
so the if no longer has to guess what the number means.*/

if("apple".indexOf("a") !== -1){console.log("Found")} else {console.log("not found")}
/*str.includes("a") does the same job in one step. It returns true or false directly, so there’s no
-1 to remember. Use indexOf when you need the position, and includes when you only need yes or no.*/

//---------------------------------------------------------------------------------------------------------------------------------------------//

// String Comparison
console.log("Z"< "a")
console.log("10"< "9")
console.log("10"< 9)
