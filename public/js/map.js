var map = L.map('main_map').setView([-30.9095796,-55.5419639], 17.25);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// adding marks to the map
L.marker([-30.9104134,-55.5425389]).addTo(map)
    .bindPopup('This is a test')
    .openPopup();

L.marker([-30.9108297,-55.5426496]).addTo(map)
    .bindPopup('This is a test 2.')
    .openPopup();

L.marker([-30.9105078,-55.5411012]).addTo(map)
    .bindPopup('This is a test 3.')
    .openPopup();