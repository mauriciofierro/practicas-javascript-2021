numArray = [6, 5, 8, 3, 4, 2, 9];
const long = numArray.length;
var current = (long - 1);
newArray =[];
/*
console.log(numArray[0]);
console.log(numArray[4]);
*/

for (var i = 0; i < long; i++){
var value = numArray[current];
//numArray.unshift(value);
newArray.push(value);

current--;
}

console.log(newArray);