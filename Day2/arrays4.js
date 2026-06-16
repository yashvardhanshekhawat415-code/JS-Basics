let arr = [1,"Apple",2,3,4,"Apple",5];
let find = arr.indexOf("Apple",0); // waht to find and from where to start give -1 if not found
console.log(find);
//let last = arr.lastIndexOf("Apple", 0); this gives output -1 as in last index of it searches backward and from 0<--  -1
let last = arr.lastIndexOf("Apple", 6);
console.log(last);
console.log(arr.includes(3));// find if a certain element is in array

//Sorting

let name = [ "arjun","aryan","Suhani","brijesh","zoravar","lodu lalit"];
name.sort();// capital letters come before small letters
name.reverse();
console.log(name);
//toSorted(); // creates new array
let newarr = name.toSorted();
console.log(newarr);
//toReversed // creates new array
let newar2= newarr.toReversed();
console.log(newar2);