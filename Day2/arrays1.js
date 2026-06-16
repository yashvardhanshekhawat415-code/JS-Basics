const array = ["Arjun", "Raj" , 2 , 12];
const array2 = ["Arjun", "  Kaju" , 22 , "Potato"];
const array3 = 
["Arjun",
 " Kaju" ,
 22 ,
 "Potato"];

array[0]= "Mamacita";
array[1]= array2;// in arrays you can pass other objects, arrays , and functions as elemnts
console.log(array);
console.log(array3);
console.log(array3);
console.log(array3);
//************************************************** */
const fruits = [];
fruits[0] = "Watermelon";
fruits[1] = "Mango";
fruits[2] = "Banana";
console.log(fruits); // this is allowed as arrays are mutable and can be modified const is not getting reassigned like below
/*
const nums = [];
nums = [1,2,3,4,5];//error only while using const, let allows this
*/
// converting array to string
let friends = ["Aditya", "Raj", "Param"];// cannot use const here as then we need another variable to store the string
friends = friends.toString();
console.log(friends);