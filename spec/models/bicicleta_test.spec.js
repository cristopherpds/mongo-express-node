var Bicicletas = require ('../../models/bicicleta');
const Bicicleta = require('../../models/bicicleta');

beforeEach( ()=> {
    Bicicleta.allBicis = []; 
});

//Test que la lista Bicicletas empieze vacia
describe('Bicicletas.allBicis', () => {
    it('comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

    });
});

//Test agregado de Bicicletas
describe('Bicicletas.add', () => {
    it('agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [-30.9104124, -55.5425399]);
        Bicicleta.add(a)

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe('Bicicleta.findById', () =>  {
    it('debe devolver la bici con id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        var aBici = new Bicicleta(1, "verde", "urbana", [-30.9104124, -55.5425399]);
        var aBici2 = new Bicicleta(2,"rojo", "urbana", [-30.9104124, -55.5425399]);
        Bicicleta.add(aBici);
        Bicicleta.add(aBici2);
        

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);
    });
});

describe('Bicicleta.removeById',()=>{
    it('debe borrar la bici con id 1',()=>{
        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici= new Bicicleta(1,'azul','montaña', [-30.9104124, -55.5425399]);
        var aBici2= new Bicicleta(2,'roja','montaña',[-30.9104124, -55.5425399]);
        Bicicleta.add(aBici)
        Bicicleta.add(aBici2)

        expect(Bicicleta.allBicis.length).toBe(2);
        var targetBici= Bicicleta.removeById(1)
        expect(Bicicleta.allBicis.length).toBe(1)
    })
})