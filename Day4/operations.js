//some coneversions
console.log(Boolean(""))
console.log(Boolean("gs"))
console.log(Boolean(1))
let num = 34
console.log(typeof String(num))
console.log("1"+ 2)//12
console.log(1+ "2")//12
console.log(1+ "2" +"2")//122
console.log(1+ 2 +"2") //32

//prefix and postfix
let x = 33
let y = x++  // if ++x both become 34
console.log(`x:${x} and y:${y}`)//y = 33 ; x = 34

//in js always make sure while comparisons that the datatype is same otherwise there is unpredictable behaviour

console.log("2" > 1)
console.log("1" == true)
console.log("2" == 2)
console.log("2" === 2)
console.log(null > 0)//this
console.log(null == 0)
console.log(null >= 0)//and this use comparison operators which convert null in to 0 thus this one gives true
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)