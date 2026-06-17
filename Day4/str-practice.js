/*1.Take the string "Chandigarh University" and print only the first word using a string method (not splitting
 and manually slicing — find a clean way).*/
const str = 'Chandigarh university'
let x = str.indexOf(" ");
console.log(str.slice(0, x)) 

 /*2.Given " javascript ", clean it up and print its length after trimming.*/
let str1 = " javascript ".trim();
console.log(str1);
console.log(str1.length)

/* 3.Take `"arjun@example.com"` and check whether it contains an `"@"` symbol using a boolean-returning method.*/
const str2 = 'arjun@example.com';
console.log(str2.includes('@'));

/*4. Given an ID `"42"`, pad it to 5 digits with leading zeros so it looks like `"00042"`.*/
const Id = "42";
console.log(Id.padStart(5 , '0'));

/*5. Given the string `"Hello, World!"`, convert it to all lowercase, then replace
the comma with nothing, so the result is `"hello world!"`.*/

const str3 = "Hello, World!";
let newstr = str3.toLowerCase();
console.log(newstr.replaceAll(',' , ""));

/*7. Given a sentence `"the quick brown fox"`, count how many words it has without using `.split().length`
 directly as the obvious shortcut — instead, think about what `.split()` actually returns and reason from there. 
 (This one's just to make sure you understand what split gives you, not a trick.)*/
let sent = "the quick brown fox";
let arr = sent.split(" ");
console.log(arr);
console.log(arr.length);

/* 8. You're given a username like `" ArJun_2025 "`. Write code that trims it, converts it to lowercase, and checks
 if it's at least 5 characters long — print `"valid username"` or `"invalid username"` based on that.*/
let str4 = " ArJun_2025 ";
str4 = str4.trim();
str4 = str4.toLowerCase();
let length = str4.length;
if(length>=5){
    console.log("valid username")
}else{
    console.log("invalid username")
}
/*9. Given a price as a string, `"199.999"`, convert it to a properly rounded 2-decimal string for display, like a price tag
 would show.*/
let price = '19.999';
price = Number(price);
console.log(price);
console.log(price.toFixed(2));

/*10. Given a template `"Hello, ${name}! You have ${count} new messages."` — don't worry about actually using
 `${}` syntax for this one (since it's already a string), instead use `.replace()` or `.replaceAll()` to manually 
 substitute `${name}` with `"Arjun"` and `${count}` with `5`.*/
 let str5 = "Hello, ${name}! You have ${count} new messages.";
 str5 = str5.replace("${name}" , "Arjun");
 str5 = str5.replace("${count}", "5");
 console.log(str5);
