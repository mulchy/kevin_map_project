var map;
var view;

function initialize() {
  var minneapolis = new google.maps.LatLng(44.964919, -93.27281);
  view = document.getElementById('view');

  // Set up the map
  var mapOptions = {
    center: minneapolis,
    zoom: 13,
    streetViewControl: false
  };
  
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  google.maps.event.addListener(map, 'click', function(e) { 
    parent.postMessage("message", "*")
  });
}

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event){
  view.innerHTML = "<h1>Please work</h1>";
}



google.maps.event.addDomListener(window, 'load', initialize);
