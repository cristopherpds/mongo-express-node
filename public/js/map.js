var map = L.map('main_map').setView([-30.9218635,-55.604461], 18);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



var Icono = L.icon({
    iconUrl: 'assets/img/bici.svg',
    iconSize:     [32,32 ]
});

L.marker([-30.9005114,-55.5395287], {icon: Icono}).addTo(map).bindPopup("Plaza Artigas").openPopup().addTo(map);
L.marker([-30.9028152,-55.5416098], {icon: Icono}).addTo(map).bindPopup("Plaza Flores").openPopup().addTo(map);
L.marker([-30.9074938,-55.5444822], {icon: Icono}).addTo(map).bindPopup("Skatepark Rivera").openPopup().addTo(map);
L.marker([-30.8966369,-55.5368564], {icon: Icono}).addTo(map).bindPopup("Plaza Internacional").openPopup().addTo(map);
L.marker([-30.9101919,-55.5418869], {icon: Icono}).addTo(map).bindPopup("Punto 5").openPopup().addTo(map);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function (result){
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion, {icon: Icono,title: bici.id}).bindPopup("").openPopup().addTo(map)
        });
    }
})