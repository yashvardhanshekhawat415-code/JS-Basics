//for of loop
let cars = ["Porshe",'BMW', 'Mclaren', 'Corvett'];
for(let car of cars){
    console.log(car);
}
// if index also needed
for (let i = 0; i < cars.length; i++) {
    console.log(i,  cars[i]);
}
//for loop
for(let i = 0; i<5 ; i++){
    console.log(i);
}
//while loop
let i = 0;
while(i<6){
    console.log(i);
    i++;
}
//do while loop
let j = 0;
do{
   console.log(j);
   j++;
}
while(j<3);

//nested loop
for(let i = 2; i<=2 ; i++){
    for(let j = 1 ; j<=10 ; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

//nested for of loop 
const teams = [
    ["John", "Mike"],
    ["Sara", "Emma"]
];

for (const team of teams) {
    for (const member of team) {
        console.log(member);
    }
}