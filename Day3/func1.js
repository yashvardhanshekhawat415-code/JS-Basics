function sayhello(){
    return "hello";
}

//let message = sayhello; // this stores function reference
let message = sayhello();// this stores function execution
console.log(message);
function add(a,b){
    return a + b;
}
console.log(add(2,3));
let sum = add(5,99);
console.log(sum);

function name( firstname , lastname){
    return firstname + " " + lastname; // without return statement the value will be undefined
    return firstname*lastname; // this line will never run
}

let myname = name("Yashvardhan" , "Singh");
console.log(myname);

function findmax(...args){
    let max = -Infinity;
    for(let i = 0 ; i < args.length; i++){
        if(max<args[i]){
        max = args[i];
    }
} 
return max;
}
let xxx = findmax(1,45,33,23,99,2);
console.log(xxx);