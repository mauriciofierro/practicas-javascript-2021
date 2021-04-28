test('Validar el "Hola Mundo"',() => {
    const hola = '¡Hola, Mundo!';
    expect(hola).toBe('¡Hola, Mundo!');
});

test('Validando objetos',() =>{
const obj1 = { uno: 1 };
obj1['dos'] = 2;
expect(obj1).toEqual({uno:1,dos:2});
});

test('Probar un for', () =>{
for(var i = 0; i < 10; i++){
    for(var j = 1; j < 10; j++){
        expect(i+j).not.toBe(0)
    }
}
});

test('Validar una suma', () =>{
var resultado = 3+9;
expect(resultado).toBe(12);
});

test('Validar una resta', () =>{
    const resultado = 8-4;
    expect(resultado).toEqual(4);
    expect(resultado).not.toEqual(5);
});

test('Validar mayor que', () =>{
    const resultado = 3 * 4;
    expect(resultado).toBeGreaterThan(10);
    expect(resultado).toBeGreaterThanOrEqual(12);
});

test('Validar menor que',() =>{
    const resultado = 6-4;
    expect(resultado).toBeLessThan(3);
    expect(resultado).toBeLessThanOrEqual(2);
});

test('Validar números flotantes',()=>{
    const resultado = 0.1 + 0.3;
    expect(resultado).toBeCloseTo(0.4);
});

test('Validar que esta cadena no contien una I', () =>{
    expect('team').not.toMatch(/I/);
});

test('Validar que contiene la palabra stop', ()=>{
    expect('Christopher').toMatch(/stop/);
    expect('Christopher').toContain('stop');
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(shoppingList).not.toContain('cereal');
    expect(new Set(shoppingList)).toContain('beer');
  });

  test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).not.toContain('Yuri');
  });

  test('Validar un valor nulo',()=>{
      const n = null;
      const z = 0;
      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
      expect(n).not.toBeTruthy();
      expect(n).toBeFalsy();

      expect(z).not.toBeNull();
      expect(z).not.toBeUndefined();
  });