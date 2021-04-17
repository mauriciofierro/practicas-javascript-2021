//Objetos & Funciones

function displayCar(){
    var impresion = `Un coche ${this.year} ${this.model} a la venta, dueña ${this.owner.nombre}`;
    console.log(impresion);
}

function register(make, model, year, owner){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;
}

function cliente(nombre, edad, genero, tarjeta, status){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.tarjeta = tarjeta; //Visa o MasterCard
    this.status = status; //Activo o Inactivo
}

var maria = new cliente ('María', 20, 'Mujer', 'Visa', 'Activo');

var reg_43 = new register ('Volkswagen', 'Jetta', 2012, maria);

reg_43.displayCar();