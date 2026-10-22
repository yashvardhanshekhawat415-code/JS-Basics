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
//shift()--->removes from the front
arr.shift()
console.log(arr)

//join()---> return the elements of the array as string seperated by commas ,
console.log(arr.join())// 1,2,3,4,5
console.log(typeof arr.join())// string

//--------------------question type methods------------------------>

console.log(arr.includes(9))
console.log(arr.indexOf(88))
console.log(arr[9])