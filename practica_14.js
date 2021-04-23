//Funciones flecha

//

function helloWorld(nombre){
    return "Hello there, " + nombre + "!";
}

console.log(helloWorld("Mau"));

const helloFlechaWorld = (name) => {

    return "Hello there, " + name + "!";
}

console.log(helloFlechaWorld("Mau"));

//Función suma

var suma = function(x,y){
    return x + y;
}

const suma2a = (x,y) => { return x + y ;}
const suma2b = (x,y) => x + y;
/*
console.log(suma(2,3));
console.log(suma2a(2,3));
console.log(suma2b(2,3));
*/
//Función cuadrado

var square = function(x){
    return x * x;
}

const square2a = (x) => { return x * x;}
const square2b = (x) => x * x;
/*
console.log(square(3));
console.log(square2a(3));
console.log(square2b(3));
*/

//Función para manejar/imprimir los caracteres de un arreglo de palabras

var palabras = [
    "arbol", "palabritas", "trabucles", "radio", "Michoacán", "Salmas"
];

var contarLetras = palabras.map(s => s.length)
console.log(contarLetras);

    //Forma tradicional

var contLetras = palabras.map(function(s){
    return s.length;
});

//Función multiplicar números de un array

var numeros = [1,2,3,4,5];

const multiplicacion = numeros => numeros * 2;
let multiplicarNums = numeros.map(multiplicacion);

console.log(multiplicarNums);

const multi = () => 2 * 2;
console.log(multi());

/*
function multiplicar(numero){
    return numero * 2;
}

console.log(multiplicar(3));

let multi = numeros.map(multiplicar)

*/