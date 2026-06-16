// more array methods
// concat
const boys = ["x", "y",'z','q']; //The concat() method does not change the existing arrays. It always returns a new array.
const girls = ['w','q',"a","s"];
const children = girls.concat(boys);
const x = boys.concat(2);// or any value like a string etc.
console.log(children);
console.log(x);
//splice 
//it can be used to delete or add elements in an array
//it modifies the original array
const fruits = ['PAPAYA', 'KIWI', 'APPLE','MELON','MANGO'];
let splice = fruits.splice(2,1,999); //************************(index where tp start, del no of elements, add this elemnt)
console.log(fruits);//from index 2 one elemnt is deleted and 999 is added
console.log(splice);//returns the deleted element in an array

//slice() - it copies just a part of the original array without modifying
const arr = [1,2,3,4,5];
console.log(arr.indexOf(3));// indexOf returns -1 when not found
let part = arr.slice(1,4);
console.log(arr.includes(3));
console.log(part);
console.log(arr);