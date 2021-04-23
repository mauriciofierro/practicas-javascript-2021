var pal = false;

function esPalindromo(palabra){

    for(var i = 0; i <= (palabra.length - 1); i++){

        for(var j = (palabra.length - 1); j >= 0; j--){

            if(palabra.charAt(i) == palabra.charAt(j)){

                pal = true;

            } else {

                pal = false;

            }
        }
    }

    if(pal == true){

        console.log(palabra + " es palíndromo.");
        
    } else {

        console.log(palabra + " no es palíndromo.")
    }

}

esPalindromo("anitalavalatina");
esPalindromo("anna");
esPalindromo("casa");
esPalindromo("arribalabirra");
esPalindromo("kinikinik");