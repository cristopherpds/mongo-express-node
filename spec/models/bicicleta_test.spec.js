var mongoose = require('mongoose');
var Bicicleta = require ('../../models/bicicleta');
//const { deleteOne } = require('../../models/bicicleta');

describe('testing bicicletas',function(){
    beforeEach(function(done){
        var mongoDB='mongodb://localhost/testdb'
        mongoose.connect(mongoDB,{useNewUrlParser:true})
        const db=mongoose.connection
        db.on('error',console.error.bind(console,'connection:error'))
        db.once('open',function(){
            console.log('we are connected to test database')
            done();
        })
    })
    afterEach(function(done){
        Bicicleta.deleteMany({},function(err,success){
            if(err) console.log(err)
            done()
        })
    })
    describe('Bicicleta.createInstance',()=>{
        it('crear una bicicleta',()=>{
            var bici = Bicicleta.createInstance(1,"verde","urbana",[4.215151545,-74.1664153165])

            expect(bici.code).toBe(1)
            expect(bici.color).toBe("verde")
            expect(bici.modelo).toBe("urbana")
            expect(bici.ubicacion[0]).toEqual(4.215151545)
            expect(bici.ubicacion[1]).toEqual(-74.1664153165)
        })
    })
    describe('Bicicleta.allBicis',()=>{
        it('comienza vacia',(done)=>{
            Bicicleta.allBicis(function(err,bicis){
                expect(bicis.length).toBe(0);
                done()
            })
        })
    })
    describe('Bicicleta.add',()=>{
        it('agregar una bici',(done)=>{
            var aBici= new Bicicleta({code:1,color:"azul",modelo:"montaña"})
            Bicicleta.add(aBici,function(err,newBici){
                if(err) console.log(err)
                Bicicleta.allBicis(function(err,bicis){
                    expect(bicis.length).toEqual(1)
                    expect(bicis[0].code).toEqual(aBici.code)
                    done()
                })
            })
        })
    })


    describe('Bicicleta.findByCode',()=>{
        it('debe devolver la bici con code 1',(done)=>{
            Bicicleta.allBicis(function(err,bicis){
                expect(bicis.length).toBe(0)
                var aBici=new Bicicleta({code:1,color:"azul",modelo:"urbana"})
                Bicicleta.add(aBici, function(err,newBici){
                    if(err) console.log(err)
                    var abici2= new Bicicleta({code:2,color:"blanca",modelo:"montaña"})
                    Bicicleta.add(abici2,function(err,newBici){
                        if(err) console.log(err)
                        Bicicleta.findByCode(1,function(error,targetBici){
                            expect(targetBici.code).toBe(aBici.code)
                            expect(targetBici.color).toBe(aBici.color)
                            expect(targetBici.modelo).toBe(aBici.modelo)
                            done();
                        });
                    });
                });
            });
        });
    });
});



/*beforeEach( ()=> {
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
})*/