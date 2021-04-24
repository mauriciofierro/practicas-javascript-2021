import pagina from './pageObjectModel';

fixture('Mis primeras pruebas en el maravilloso mundo de TestCafé.')
.page('https://devexpress.github.io/testcafe/example/')

test('Probar que la pag se puede abrir correctamente', async t =>{
    await t
});

test('Probar que se pueda escribir', async t =>{
    await t
    .typeText(pagina.nameDev, 'Mauricio Fierro')
    .expect(pagina.nameDev.value).eql('Mauricio Fierro')
});

test('Probar que se pueda seleccionar el checkbox', async t =>{
    await t
    .click(pagina.checkboxRemoteTesting)
    .expect(pagina.checkboxRemoteTesting.checked).ok();
});

test('Probar que se pueda seleccionar el radio button', async t =>{
    await t
    .click(pagina.radioButtonWindows)
    .expect(pagina.radioButtonWindows.checked).ok();
});

test('Probar que se pueda seleccionar un elemento de una lista', async t =>{
    await t
    .click(pagina.listaInterface)
    .click(pagina.listaInterfaceJSAPI)
    .expect(pagina.listaInterfaceJSAPI.value).ok()
    .expect(pagina.listaInterfaceJSAPI.selected).ok();
});

test('Probar que se puede escribir un comentario en la caja de texto', async t =>{
    await t
    .click(pagina.checkboxTriedTestCafe)
    .typeText(pagina.textArea, 'Welcome, General Kenobi!', {speed: 0.1})
    .typeText(pagina.textArea, '\nSalto de linea', {speed: 0.1})
    .typeText(pagina.textArea, 'Ahora sucede esto', {speed:0.1, replace: true})
    .expect(pagina.textArea.value).eql('Ahora sucede esto')
});

test('Probar mover el slider', async t =>{
    await t
    .click(pagina.checkboxTriedTestCafe)
    .expect(pagina.checkboxTriedTestCafe.checked).ok()
    .dragToElement(pagina.slider.handle, pagina.slider.tick.withText('9'), {speed: 0.1});
    //Tarea: ¿Cómo validamos que sí está en la posición que deseamos?
});