var position = { lat: -23.2978631 , lng: -45.9676434 }

// Map style
// 
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: position.lat, lng: position.lng},
          zoom: 8
        });
      }