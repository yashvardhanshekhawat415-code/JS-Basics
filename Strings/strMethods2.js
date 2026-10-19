//repeat(count)--> Returns new string
let text = "Arigato Gozaimasu "
let ans = text.repeat(2)//creates a new string and stores it in ans.
console.log(ans)
console.log(text.repeat(2))//creates a new string and passes it directly to console.log()
console.log("ha".repeat(3))

//replace("what to replace" , "with what to replace")
//The replace() method does not change the string it is called on. It returns a new string
let text2 = "I love Papaya Shake"
console.log(text2)
console.log(text2.replace("Papaya","Mango"))
let ans2 = text2.replace("Papaya","Banana")
console.log(ans2)
let score = "The score of A team is 22, the  A team is loosing"
let realScore = score.replace("A", "B")// replaces only first occurance, it also works with space
console.log(realScore)

//regular expressions i and g using replace
let saying = "today is good, yesterday was good too"
console.log(saying.replace(/good/g, "bad")) //global matches replaces all
console.log(saying.replace(/GOOD/i, "bad")) // case-insensitive

//replaceAll()-->replaces all occurances

let greetings = "hello hello hello";

let newGreeting = greetings.replaceAll("hello", "hi");

console.log(greetings);  // hello hello hello
console.log(newGreeting); // hi hi hi

//slice(start, end)

const Example = "Action Bronson new japan video is sick af! :-)"
let newExp = Example.slice(0, 6) // the character at last index(end) is not included.
console.log(newExp)
console.log(Example.slice(-7, -1)); // in negative indexing the last element is -1 and seclast is -2 and so on

//substring(start, end)
//substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
const exp = "Action, Bronson"
console.log(exp.substring(-8 , 10))
console.log(exp.substring(0 , 6))

//split()
console.log(exp.split(""))
console.log(exp.split(" "))
console.log(exp.split(","))