// Condicionantes

var txt;
var r = "PUSH THE BUTTON";

if (r == "PUSH THE BUTTON!"){
    txt = "Test Pass";
} else {
    txt = "Test Fail";
}

console.log(txt)

//Otro ejercicio

var num1 = 42

if (num1 == 42){ console.log("El número correcto es: ", num1)}

// Otro ejemplo

var a = 1;
var b = 2;
var c = 3;

if (a < b && c > b){
    console.log("True")
}

if (a < b || c > b){
    console.log("True")
}

//Otro ejemplo

var booleano = false;

if (booleano){
    console.log("Test Fail")
} else {
    console.log("Test Pass")
}

if (!booleano){
    console.log("Test Fail")
} else {
    console.log("Test Pass")
}

