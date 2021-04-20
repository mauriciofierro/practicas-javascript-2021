var num = 10;
var factorial = num;
var result = 1;

for (var i = 0; i < num; i++){
    result *= factorial;
    factorial--;
}

console.log(result)