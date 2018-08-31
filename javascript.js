$(document).ready(function () {
    
    getLocation();


    
});

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(position);
    console.log(lat);
    console.log(long);
    getWeather(lat, long);

}

function getWeather(lat, long) 
{
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&APPID=f359c189ba425c0490e35966335db4c7",
        type: "GET",
        data: {
            format: 'json'
        },
        success: function(response) {
            console.log(response);
            console.log(response.city.name);
        },
        error: function(error) {
            console.log(error);
        }
      });
      
}