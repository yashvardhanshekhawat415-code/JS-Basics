//.test()--> test asks “does this pattern appear in the string?” and gives back true or false.
const pattern = /cat/i // i Makes it case-insensitivs
console.log(pattern.test("I have a cat"))//true
console.log(pattern.test("I have a dog"))//False
console.log(pattern.test("I have a CAT"))//true because of i
console.log(pattern.test("concatenate"))//true because it just searches for this substring and can lead to bugs

//anchors  ^ --> starts here : $ --> ends here
console.log(/^cat/.test("cat food"))///^cat/ means the string must START with cat.
console.log(/^cat/.test("my cat"))
console.log(/cat$/.test("my cat")) ///cat$/ means the string must END with cat
console.log(/^cat$/.test("cat")) 
console.log(/^cat$/.test("cat food"))
console.log(/^cat$/.test("concatnate"))

// \d -- checks if the digit is there with anchors its even more usable
console.log(/\d/.test("7896"))
console.log(/^\d$/.test("7"))//true
console.log(/^\d$/.test("77"))//false
console.log(/^\d$/.test("a"))//false


//+ : +: one or more. It also applies to the thing right before it.
console.log(/^\d+$/.test("76889"))//\d+ means one digit, or two, or a hundred, with no upper limit but at least one.
console.log(/^\d+$/.test("1"))//true
console.log(/^\d+$/.test(""))//false
console.log(/^\d+$/.test("1a"))//false

// {} -- exactly these many numbers must be in the string
console.log(/^\d{3}$/.test("777"))// true the string must have only three digits
console.log(/^\d{2}$/.test('777'))//false--> too big, three digits
console.log(/^\d{3}$/.test(773)) //test() works on numb too, it converts whatever you pass it into a string before it checks the pattern
console.log(/\d{4}/.test("hi my name is 7256")) // true --> does four digits in a row appear somewhere inside this string?
console.log(/^\d{2}$/.test('777'))

// [a-z]: one character from a set
console.log(/[a-z]/.test("Arjun"))//true as it contains atleast on alphabet from a to z.
console.log(/^[abc]$/.test("a"))//true
console.log(/^[abc]$/.test("g"))//false
console.log(/[a-zA-Z]/.test("A"))//true  this takes all the alphabets in consideration
console.log(/[a-zA-Z]/.test("AbcA"))//true 

// using all of them
console.log(/^[a-z]+$/.test("hello"))//true
console.log(/^[a-z]+$/.test("hello boy"))//false--> A space is not in a-z, so the match breaks there.
console.log(/^[a-z]+$/.test("Hello"))// False -->Beacuse of capital H
console.log(/^[a-zA-Z]+$/.test("Hello"))// True