var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: 40.518385783899, lng: -40.518385783899},
          zoom: 2.5
        });
      }