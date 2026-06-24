const arr = [1,2,3,4,5];
//array methods
//push(elemnet to be added)---> add element at the end
arr.push(6)
//arr.push("Arjun")
console.log(arr)
//pop()---> removes element from the back
arr.pop()
console.log(arr)

//unshift(element)--->adds the element at the start of the array
arr.unshift(0)
console.log(arr)
//shift()
arr.shift()
console.log(arr)

//join()---> return the elements of the array as string seperated by commas ,
console.log(arr.join())

//--------------------question type methods------------------------>

console.log(arr.includes(9))
console.log(arr.indexOf(3))
console.log(arr[9])

//---------------------slice() and splice()------------------------->
//slice()---> give me a copy of that part
//slice(start, end)
const jojo =["jotaro", "dio", "avdol", "jonathan","jolyene", "theworld!"]
const villain = jojo.slice(1,4)
const villain2 = jojo.slice(1,jojo.length-1)
console.log(villain)
console.log(villain2)
console.log(jojo.slice(jojo.length-1))
console.log(jojo)
//splice()---> Cut this part out of the original array.
//splice(start, deleteCount, item1, item2, ...)
const num = [1,2,3,4,5]
const removed = num.splice(0,2,"hi","bye")
console.log(removed)
console.log(num)