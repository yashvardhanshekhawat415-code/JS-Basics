//1
let price , quantity , total;
price = 40;
quantity = 20;
total = price*quantity;
console.log("total is " + total + " for " + quantity + " items" );
//2
if (true) {
    var a = 88;
    let b = 99;
}
console.log(a);

//console.log(b);  b is not defined
//3
let sec = 3725;
const h = Math.floor(sec/3600);
const min = Math.floor((sec/3600)%60);
const s = Math.floor(sec%60);
console.log(h + "h " + min + "min " + s +"sec");

//4 even odd
let nums = [7 , 10, 0];
for(let n of nums){
    if(n%2===0){
        console.log(n + " is Even");
    }
    else
    console.log( n + " is odd");
}
