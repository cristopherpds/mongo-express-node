var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;

}

Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function (aBici) {
    Bicicleta.allBicis.push(aBici);

}


Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if(aBici)
        return aBici;
    else
    throw new Error(`No exite una bicicleta con id ${aBiciId}`);
}



Bicicleta.removeById = function(aBiciId){
    //var aBici = Bicicleta.findById(aBiciId);
    for(var i = 0; 1 < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

/*
var a = new Bicicleta(1, 'rojo', 'urbana', [-30.9104124, -55.5425399]);
var b = new Bicicleta(2, 'negro', 'urbana', [-30.9104134, -55.5425389]);



Bicicleta.add(a)
Bicicleta.add(b) */

module.exports = Bicicleta;
