const array = [1,2,3,4]
console.log(array['2'] == array['02'])
// arrays are objects and can have any property name you make up.
array["hello"] = 100;
console.log(array["hello"])
/*
{
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
  hello: 100
}*/
//--------------------very interesting point-------------------------
const fruits = [];
fruits.push("mango", "guava", "lichi")
console.log(fruits)
console.log(fruits.length)
fruits[5] = "kiwi"
console.log(fruits) //output -> [ 'mango', 'guava', 'lichi', <2 empty items>, 'kiwi' ]
console.log(fruits.length)
//decreasing the length
const jojo = ["jonathan", "jotaro","father pucci", "dio brando", "mohammad avdol"];
jojo.length = 2
console.log(jojo) // output -> [ 'jonathan', 'jotaro' ]
/*length smaller → deletes elements past that index.
length larger → creates empty slots (not undefined values, actual holes).*/

