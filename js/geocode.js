function geoCodeLatLng(lat, long) {
    var geocoder = new google.maps.Geocoder();
    var latlng = {
        lat: parseFloat(lat),
        lng: parseFloat(long)
    };

    geocoder.geocode({
        'location': latlng
    }, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                var cityName = (results[0]).address_components[3].short_name;
                var state = (results[0]).address_components[5].short_name;
                var zip = (results[0]).address_components[7].short_name;
                $("#address").append(cityName + ", " + state + " " + zip);

            } else {
                console.log('No results found');
            }
        } else {
            console.log('Geocoder failed due to: ' + status);
        }
    });
}