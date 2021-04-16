//Ciclos

var i = 0;

for (i; i < 5; i++){
    console.log("Valor de i: ", i)
}

    var arreglo = ['a', 'c'];

for (var j = 0; j < arreglo.length; j++){
    console.log("Valor de j: ", j)
}

//While

var chelas = 99;

while (chelas > 0){
    console.log("Aún hay " + chelas + " chelas en el refri, sigue la fiesta!")
    chelas -= 1
    if (chelas == 1){
        console.log("Aún hay " + chelas + " chela en el refri, sigue la fiesta!\n")
        chelas -= 1
    }
   
}

// Switch -  Case

var rank = "Sergeant";

switch (rank){

    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}