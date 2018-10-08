$(document).ready(function () {
    
    //everything starts here
    getLocation();

});

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);

}

function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    
    //retrieves the city, state, zip of coordinates through google maps api
    geoCodeLatLng(lat, long);

    //retrieves the current weather conditions
    getCurrentWeather(lat, long);

    //retrieves additional weather conditions
    getWeather(lat, long);

}

function geoCodeLatLng(lat, long) {
    var geocoder = new google.maps.Geocoder();
    var latlng = {lat: parseFloat(lat), lng: parseFloat(long)};
    
    geocoder.geocode({'location': latlng}, function(results, status) {
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

function getCurrentWeather(lat, long) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial" + "&APPID=f359c189ba425c0490e35966335db4c7",
        type: "GET",
        data: {
            format: 'json'
        },
        success: function(response) {
            console.log(response);        
            var currentDate = moment.unix(response.dt).format('MMMM Do YYYY');
            $("#current-date").append(currentDate);
            var currentTime = moment.unix(response.dt).format('dddd h:mm a');
            $("#current-time").append(currentTime);
            var currentCondition = response.weather[0].description;
            $("#current-condition").append(currentCondition.toTitleCase());
            var iconCode = response.weather[0].icon;
            var dayOrNight = iconCode.substring(iconCode.length - 1);
            $("#current-icon").addClass("owf owf-" + response.weather[0].id + "-" + dayOrNight + "");
            var currentTemp = response.main.temp;
            $("#current-temp").append(parseInt(currentTemp) + "&#8457;"); 
            var rain = response.rain["1h"];
            $("#rain").append(rain);
            var humidity = response.main.humidity;
            $("#humidity").append(humidity);
            var windDeg = response.wind.deg;
            var windSpeed = response.wind.speed;
            $("#wind").append(windSpeed + " mph " + convertDeg(windDeg));
        },
        error: function(error) {
            console.log(error);
        }
    });      
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
            console.log(response.list);                        
            for (var i = 0; i <=7; i++) {                                
                var time = moment.unix(response.list[i].dt).format('h:mm a');
                $("#time" + i).text(time);
            }
        },
        error: function(error) {
            console.log(error);
        }
    });      
}
