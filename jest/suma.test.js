const suma = require('./suma');

test('Comprobar que la suma de 3+1 es igual a 4',()=>{
    expect(suma(3,1)).toBe(4);
});

//Tarea agregar 5 pruebas más, usando más expect que no sean TO BE