// function doubleIt(num) {
//     return num*2;
// }

// const doubleIt = function(num) {
//     return num*2;
// }

const doubleIt = num => num*2;
const add = (x=0, y=0) => x+y;
const rand = () => Math.round(Math.random()*10);
let result = doubleIt(5);
console.log(result);

result = add(20, 7);
console.log(result);

result = rand();
console.log(result);