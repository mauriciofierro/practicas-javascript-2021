const operaciones = require('./operaciones');

test('Validar "Hola, Mundo"', ()=>{
expect(operaciones.holaMundo()).toBe('¡Hola, Mundo!');
});

test('Validar función "suma", que de 100', () =>{
    expect(operaciones.suma(51,49)).toEqual(100);
});

test('Validar función "resta", ', () =>{
    expect(operaciones.resta(3,2)).toEqual(1);
});

test('Validar función "isNull", con una var null', () => {
    expect(operaciones.isNull()).toBe(null);
});

test('Validar función "multiplicar", que sea 25', () =>{
    expect(operaciones.multiplicar(5,5)).toEqual(25);
});

//Tarea: Probar todas las funciones de operaciones.js