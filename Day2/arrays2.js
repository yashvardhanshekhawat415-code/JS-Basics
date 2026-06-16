const array = [1,2,3,4,5];
let size = array.length;
array.pop();// removes the last element from array
console.log(array);
let x = array.pop();// it also stores the deleted element
console.log(x);
console.log(size);// 5 as it was stored earlier and does not update automatically
console.log(array.at(0));
console.log(array);
//pushing element 
array.push(5);
console.log(array);
let push = array.push(5);
console.log(push);// return the length of array after pushing 5
//shift
array.shift();
console.log(array);
let shift = array.shift();
console.log(shift);//returns the shifted element of element deleted from start
//unshift
array.unshift("Arjun");
console.log(array);
let unshift = array.unshift("Karan");
console.log(unshift);//returns length after unshifting
console.log(array);


