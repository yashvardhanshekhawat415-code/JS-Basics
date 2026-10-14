console.log(isNaN("abc"));// isNaN does type conversion then checks. it firsts try to convert string to number fails and gives NaN which is nan misleading
console.log(Number.isNaN("abc"))