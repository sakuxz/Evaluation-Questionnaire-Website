
var center = {
  lat:  24.078979,
  lng: 120.553788
}

var markers = [];
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 17,
    draggable: false
  });
  //setPin(JSON.stringify(data));
}

function setPin(json) {
  try {
    map.setCenter({
      lat: (dev_type === 'dev') ? 24.078979 : PlugIn.getLat(),
      lng: (dev_type === 'dev') ? 120.553788 : PlugIn.getLng()
    });
    if (!json) return;
    var data = JSON.parse(json);
    markers.forEach(function(e, i) {
      e.setVisible(false);
    });
    markers = [];
    data.forEach(function(e, i) {
      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#48b8ff',
          fillOpacity: 0.7,
          strokeColor: '#48b8ff',
          strokeWeight: 15,
          scale: 6
        },
        label: e.name,
        position: {
          lat: e.latitude,
          lng: e.longitude
        },
        title: 'Hello World!',
        labelInBackground: false
      });
      markers.push(marker);
    });
  } catch (e) {}

}