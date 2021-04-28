const operaciones = require('./operaciones');

test('Validar "Hola, Mundo"', ()=>{
expect(operaciones.holaMundo()).toBe('¡Hola, Mundo!');
});

//Tarea: Probar todas las funciones de operaciones.js