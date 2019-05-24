function cargarMapaGeo() {
    
    var map = new google.maps.Map(document.getElementById('posicion'), {
        center: {
            lat: -34.922883,
            lng: -57.956317
        },
        zoom: 6
    });
    var marker1 = new google.maps.Marker({
        position: {lat: -34.922883, lng: -57.956317}        
        });
    marker1.setMap(map);
    var infoWindow = new google.maps.InfoWindow;
    
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
    
            
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

}

$(document).ready(function(e) {
    
    
    $('#index').click(function(e) {
        window.location.href = 'buscar.html';
    });
    
});