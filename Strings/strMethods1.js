let String1 = "Jeff Hardy"
console.log(String1.length)
//startsWith() and endsWith()
console.log(String1.startsWith("J"))
console.log(String1.endsWith("Hardy"))
console.log(String1.endsWith("hardy"))// Case Sensitive

//using []
console.log(String1[1])  // use of []--> to access characters of a string

//charat()
console.log(String1.charAt(3))
console.log(String1.charAt(undefined))// undefined gets converted to index 0.
//negative an out of bound values get empty string
console.log(String1.charAt(-5))// empty string ""
console.log(String1.charAt(99))// empty string ""

//at()
const String2 = "Mina Kitano"
console.log(String2.at(0));// positive indexing start with 0 --> M
console.log(String2.at(-1));// negative index starts with -1 --> o
console.log(String2.at(-2));// n
console.log(String2.at(99));// out of bounds = undefined

//includes()
const sentence = "The quick brown fox jumps over the lazy dog"
let word = "brown"
console.log(`The word ${word} ${sentence.includes(word) ? "is" : "is not"} in the Sentence.`)//using ternary operator
console.log(sentence.includes("Brown")) // case sensitive brown is there but not Brown
console.log(sentence.includes(" "))//works with space too

//index0f()
const sen1 = "Michael Cera is the Goat"
console.log(sen1.indexOf("Goat"))// Gives index of first chaarcter of substring
console.log(sen1.indexOf("goat"))// case senitive when not found  returns -1
console.log(sen1.indexOf(" "))// gives the index of first occurance

//toUpperCase and toLoweCase()
console.log(sen1.toUpperCase())
console.log(sen1.toLowerCase())

//trim()- removes all extra space in the end and the start
let sen2 = " Vlahovic Dusan "
console.log(sen2);
console.log(sen2.trim())

//padStart() and padEnd()
const OriginalString = "Boom"
let padded1 = OriginalString.padStart(7,"B")
console.log(padded1)
let padded2 = OriginalString.padEnd(7, "B")
console.log(padded2);