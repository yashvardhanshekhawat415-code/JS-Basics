const age = 20;
const votage = 18;
//coparison operators
console.log( age < votage);
console.log( age > votage);
console.log( age == votage);
console.log( age >= votage);
console.log( age <= votage);

const score = 30;
const scorestr = '30';
// loose vs strict equality
console.log( score == scorestr);//true
console.log( score === scorestr); //false
console.log( score !== scorestr); //true

// not operator 
let logstatus = false;
if(!logstatus){
    console.log('Please log in');
}

// logical operators
let temp = 35;
console.log(temp < 40 && temp > 30);
console.log(temp < 30 || temp == 30);
console.log(temp != 30);
// Ternary operator
let value = 20;
let result = value >= 18 ? 'Eligible' : "ineligible";
console.log(result);

const a = 20;
const b = 30;
const max = a < b ? b : a;
console.log(max);

console.log(a == 22 ? true : false);

// truthly and falsly values
/*-----> Whenever JavaScript expects a boolean, it automatically converts values to either true or false.
falsly values are ---> false , 0 , -0, nan , undefn=ined , "" , null
truthly values are everything except them */

if(0){ // 0 is converted into false
    console.log("run");
}
else{
    console.log("dont run")
}
    
if("false"){ // this is not an empty string so it is converted into true
    console.log("fuck off");
}