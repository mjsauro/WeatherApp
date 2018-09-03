$(document).ready(function () {
    
    var now = moment().format('MM DD YY');

    $("#date").append(now);
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
            console.log();

            for (var i = 0; i < 5; i++);
            var date1 = (moment.unix(response.list[0].dt).format("LLL"));
            $("#date1").append(date1);

        },
        error: function(error) {
            console.log(error);
        }
    });      
}
