var myCar = new Object();

console.log(myCar);

myCar.make = "Volskwagen";
myCar.model = 'Jetta';
myCar.year = 2012;


// Otra forma de declarar el objeto myCar

var miCoche = {make: 'Ford', model: 'Mustang', year: 1967};

console.log(myCar, miCoche);

myCar.year = 1970;

console.log(myCar);

//Tipos de propiedades en un objeto

var elObjeto = new Object(),
str = 'myString',
rand = Math.random(),
obj = new Object()
booleano = true;

console.log(elObjeto, str, rand, obj, booleano)

elObjeto.type = 'Sintaxis de puntos';
elObjeto['fecha de creación'] = 'Cadena con espacios';
elObjeto[str] = 'Usando variable de cadena';
elObjeto[rand] = 'Usando un número aleatorio';
elObjeto[obj] = 'Inception con objetos';
elObjeto[''] = 'Usando una propiedad vacía';
elObjeto[booleano] = 'Usando una propiedad booleana';

console.log(elObjeto);

for (var prop in elObjeto){
    if (elObjeto.hasOwnProperty(prop)){
        console.log("La propiedad " + prop + ' del objeto es ' + elObjeto[prop])
    }
}

// Funciones de objetos
console.log("\n");

//Iteración con una función
function showProp(obj, objName){
    var result = '';

    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            result += `${objName}.${i} = ${obj[i]}\n`
            console.log("El valor de i: ", i)
        }
    }

    return result;
}

console.log(showProp(elObjeto, 'elObjeto'));