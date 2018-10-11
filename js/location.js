function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);

}

function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    //retrieves the city, state, zip of coordinates through google maps api
    geoCodeLatLng(lat, long);

    //retrieves the current weather conditions
    getCurrentWeather(lat, long);

    //populates the button times
    getButtonTimes(lat, long);

}