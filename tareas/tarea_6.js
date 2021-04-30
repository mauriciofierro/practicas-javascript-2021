var lista = [7,6,5,3,4,5,3,2,4];

console.log("Array 1\n");
while(lista.length) {
    console.log(Math.min(...lista.splice(0,3)));
}

console.log("\nArray 2\n");

var lista2 = [8,7,6,5,4];
while(lista2.length) {
    console.log(Math.min(...lista2.splice(0,3)));
}




/*
var size = 10; var arrayOfArrays = [];
for (var i=0; i<lista.length; i+=size) {
     arrayOfArrays.push(lista.slice(i,i+size));
}
console.log(arrayOfArrays);
*/
/*
function divider(lista, howMany){
    var arrayFinal = [];
    input = lista.slice(0);

    while(input[0]){
        arrayFinal.push(input.splice(0,howMany));
    }
    return arrayFinal;
}

console.log((divider(lista,3)).length);
console.log(Math.min(divider(lista,3)));
*/
/*
function menorEnGruposDe3(lista){
    var groupsArr = divider(lista,3);
    console.log(groupsArr)
    console.log(Math.min(...groupsArr));
}
*/
/*
var index = numbArr.length;
var arrPrime = numbArr.slice(0, 3);
var arrDPrime = numbArr.slice(3, 6);
var arrTPrime = numbArr.slice(6, index);

console.log(arrPrime,arrDPrime,arrTPrime);


var i,j,temparray,chunk = 3;
for (i=0,j=numbArr.length; i<j; i+=chunk) {
    temparray = array.slice(i,i+chunk);
    // do whatever
}

console.log(temparray);
*/