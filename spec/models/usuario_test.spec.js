var mongoose = require('mongoose')
var Bicicleta = require('../../models/bicicleta')
var Usuario = require('../../models/usuario')
var Reserva = require('../../models/reserva')
var server =require('../../bin/www')

describe('testing usuario',function(){
    beforeEach(function(done){
        var mongoDB='mongodb://localhost/testdb'
        mongoose.connect(mongoDB,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
        const db = mongoose.connection
        db.on('error',console.error.bind(console,'Connection error'))
        db.once('open',function(){
            console.log('We are connected to test database')
            
        })
    })
    afterEach(function(done){
        Reserva.deleteMany({},function(err,success){
            if (err) console.log(err);
            Usuario.deleteMany({},function(err,success){
                if (err) console.log(err);
                Bicicleta.deleteMany({},function(err,success){
                    if (err) console.log(err);
                    done();
                })
            })
        })
    })
    

    
    describe('Cuando se reserva una bicicleta',()=>{
        it('debe existir la  reserva',(done)=>{
            const usuario = new Usuario({nombre:'Josué'});
            usuario.save();
            const bicicleta = new Bicicleta({code:1,color:"azul",modelo:"urbana"});
            bicicleta.save();
            
            var hoy= new Date();
            var manhana = new Date();
            manhana.setDate(hoy.getDate()+1);
            usuario.reservar(bicicleta.id, hoy, manhana, function(err,reservas){
                Reserva.find({}).populate('bicicleta').populate('usuario').exec(function(err, reservas){
                    console.log(reservas[0]);
                    expect(reservas.length).toBe(1);
                    expect(reservas[0].diasDeReserva()).toBe(2);
                    expect(reservas[0].bicicleta._id).toBe(1);
                    expect(reservas[0].usuario.nombre).toBe(usuario.nombre);
                    done();
                });
                
            });
        });
    });
});