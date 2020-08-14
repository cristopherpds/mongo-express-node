var request = require('request')
var server=require('../../bin/www');

var baseUrl="http://localhost:3000/api/bicicletas"


describe('Bicicleta API',()=>{
    beforeEach(function(done){
        var mongoDB='mongodb://localhost/testdb';
        mongoose.connect(mongoDB, {useNewUrlParser:true});
        const db=mongoose.connection;
        db.on('error', console.error.bind(console,'Connection:error'));
        db.once('open', function(){
            console.log('We are connected to test database');
            done();
        })
    })
    afterEach(function(done){
        bicicleta.deleteMany({}, function(err,success){
            if(err) console.log(err);
            done();
        })
    })
    describe('GET BICICLETAS /', () => { 
        it('Status 200', (done) => {
            request.get(baseUrl, function(error,response,body){
                var result=JSON.parse(body);
                expect(response.statusCode).toBe(200);
                expect(result.bicicletas.length).toBe(0);
                done();
            })
        })
    })
    describe("POST Bicicleta /create", () => {
        it('Status 200', (done) => {
            var headers = {'content-type': 'application/json'};
            var aBici='{"code":  3, "color": "rojo", "modelo": "urbana" ,"ltd":54.515,"lng":5.15154}'
            request.post({
                headers: headers,
                url:baseUrl+ '/create',
                body: aBici
            },function(error,response,body){
                expect(response.statusCode).toBe(200);
                var bici=JSON.parse(body).bicicleta
                console.log(bici)
                expect(bici.color).toBe("rojo")
                expect(bici.ubicacion[0]).toBe(54.515)
                expect(bici.ubicacion[1]).toBe(5.15154)
                done();
                //jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
            })            
        })
    })
})


/*var Bicicleta = require('../../models/bicicleta');
var request = require('request');
var server = require('../../bin/www');


describe('Bicicleta API', () =>{
    describe('GET BICICLETAS /', () => {
        it('Status 200', () =>{
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(1,'negro','montaña', [-30.9104124, -55.5425399]);
            Bicicleta.add(a)

            request.get('http://localhost:3000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200);

            });
        });

    });

    describe('POST BICICLETAS /create', () =>{
        it('STATUS 200', (done) => {
            var headers = {'content-type': 'aplication/json'};
            var aBici = '{"id": 10, "color": "rojo", "modelo": "urbana", "lat": -30, "lng": -55}';
            request.post({
                headers: headers,
                url:    'http://localhost:3000/api/bicicletas/create',
                body: aBici
            }, function(erorr, response, body){
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe("rojo");
                done();

            });
        });
    });
});*/
