import { Selector } from 'testcafe';

class Page{
    constructor(){
        this.nameDev = Selector('#developer-name')
        this.checkboxRemoteTesting = Selector('#remote-testing')
        this.radioButtonWindows = Selector('#windows')
        this.listaInterface = Selector('#preferred-interface')
        this.listaInterfaceJSAPI = Selector('#preferred-interface > option:nth-child(2)')
        this.checkboxTriedTestCafe = Selector('#tried-test-cafe')
        this.textArea = Selector('#comments')

        this.objetoSlider = Selector('#slider')
        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick: Selector('.slider-value')
        }
    }
}

export default new Page();