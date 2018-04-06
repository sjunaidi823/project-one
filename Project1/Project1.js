$(document).ready(function () {
    $("#locationButton").on("click", initMap)
    function initMap() {
        var nycAddress = { lat: 40.738626, lng: -73.97711 }
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: nycAddress
        });
        var marker = new google.maps.Marker({
            position: nycAddress,
            map: map
        });
    }
});