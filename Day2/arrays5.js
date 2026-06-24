const x = [1,2,3,4,5]
const y = [6,7,8,9,10]

//push
//x.push(y) // hives nested array not god
console.log(x)

//concat

const z = x.concat(y)
console.log(z)

// spread
const newz = [...x , ...y]
console.log(newz)

//flat(infifnity)-takes the entry of all the sub arrays and print it a s one

const arr1 = [1,2,3,[4,5,6,7,[8,9,20]]];
const new_arr1 = arr1.flat(Infinity)
console.log(new_arr1)

//Array.from()-  converts anything array-like or iterable into a real array.
console.log(Array.from("mitochondria"))
console.log(Array.from({name : "mitochondria"})) // interesting case

//Array.of(selected variables)

score1 = 100
score2 = 101
score3 = 102
console.log(Array.of(score1,score2,score3))
//Array.isArray
console.log(Array.isArray("Hitesh"))