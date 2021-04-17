//Objetos & funciones

function car(marca, modelo, color, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}

//console.log(car)

var Seat = new car('Seat', 'León', 'Azul', '2021');
var Mazda = new car('Mazda', 'Mazda 3', 'Negro', '2020');
var Mercedes = new car('Mercedes', 'Clase E', 'Blanco', '2021');
var Ferrari = new car('Ferrari', 'F40', 'Rojo', '1984');

//console.log(Seat, Mazda, Mercedes, Ferrari);

function cliente(nombre, edad, genero, tarjeta, status){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.tarjeta = tarjeta; //Visa o MasterCard
    this.status = status; //Activo o Inactivo
}

var maria = new cliente ('María', 20, 'Mujer', 'Visa', 'Activo');
let fernando = new cliente ('Fernando', 30, 'Hombre', 'MasterCard', 'Inactivo');

function registro(marca, modelo, anio, owner){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.owner = owner;
}

var reg_56 = new registro ('Seat', 'Cupra', 2020, maria)

console.log('Registro: ', reg_56);

//Tarea #3: ¿Será que podemos crear una función que cree un objeto con otros dos objetos?
//Tarea #4: Crear objetos Casa, objetos personas.