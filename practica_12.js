//Ejercicio Three Company

function threeCompany(cadena){
var n = cadena.length;
var output = '';

for (var i = 0; i < n; i++){
    var letra = cadena.charAt(i);
    output += letra.repeat(3);
}

return output;
};

console.log(threeCompany('ty'));
console.log(threeCompany('5940'));
console.log(threeCompany('casa'));