var Bicicleta = require('../../models/bicicleta');
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
});
