function cliente(nombre, edad, genero, tarjeta, status){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.tarjeta = tarjeta; //Visa o MasterCard
    this.status = status; //Activo o Inactivo
}

function pelicula(titulo, idioma, sala, complejo){
    this.titulo = titulo;
    this.idioma = idioma;
    this.sala = sala;
    this.complejo = complejo;
}

var cliente1 = new cliente("Mauricio", 28, "M", "MasterCard", "Activo");
var cliente2 = new cliente("Ricardo", 27, "M", "MasterCard", "Activo");

var pelicula1 = new pelicula("Demon Slayer", "SUB", 17, "Arcos VIP");

function proyeccion(client1, client2, film){
this.client1 = client1;
this.client2 = client2;
this.film = film;
}

var funcion1 = new proyeccion(cliente1,cliente2,pelicula1);

console.log(funcion1);