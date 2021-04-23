var vowelsArray = ["A", "a","E","e","I","i","O","o","U","u"];
var vocales = 0;

function cuentaVocales(texto){
    for(var i = 0; i <= (texto.length - 1); i++){

        for(var j = 0; j <= (vowelsArray.length - 1); j++){

            if(texto.charAt(i) == vowelsArray[j]){

                vocales += 1;
            }
        }
    }
    return vocales;
}

console.log("El número de vocales es: " + cuentaVocales('Yurishi'));