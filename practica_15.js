//Funcion "filter"

const arrNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const moduloQuattro = arrNum.filter(n => n % 4 === 0)

console.log(moduloQuattro);

//nota: toLowerCase() includes() toUpperCase()

//
console.log(0 == false);
console.log(0 === false);

//Ejercicio buscar el numero menor y mayor de algunos números

var x = 21, y = -5, z = 3;

console.log(Math.min(z,y))
console.log(Math.min(z,y,x))

console.log(Math.max(x,y))
console.log(Math.max(x,y,z))
console.log(Math.max(y,z))

//Usando un array

var numArr = [21,-5,3,45,1]

function maximo(arreglo){
    return Math.max(...arreglo)
}

console.log(maximo(numArr))

console.log(Math.max(...[4,6,2,8,1]));

//ECMAScript6 new spread operator arrays

//Función separar un array

var index = numArr.length;
var arrPrime = numArr.slice(0, index/2);
var arrDoublePrime = numArr.slice(index/2, index);

function divider(lista, howMany){
    var arrayFinal = [];
    input = lista.slice(0);

    while(input[0]){
        arrayFinal.push(input.splice(0,howMany));
    }
    return arrayFinal;
}

console.log(divider(numArr,3));
console.log(divider(numArr,5));

