$(document).ready(function () {
    
    getLocation();

});

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);

}

function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    getCurrentWeather(lat, long);
    geoCodeLatLng(lat, long);
    //getWeather(lat, long);

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

            var currentDateAndTime = moment.unix(response.dt).format('dddd, MMMM Do YYYY, h:mm a');
            $("#current-date-and-time").append(currentDateAndTime);

            var currentCondition = response.weather[0].description;
            $("#current-condition").append(currentCondition.toTitleCase());

            var iconCode = response.weather[0].icon;
            var dayOrNight = iconCode.substring(iconCode.length - 1);
            $("#current-icon").append("<i class='owf owf-4x owf-" + response.weather[0].id + "-" + dayOrNight + "'></i>");

            var currentTemp = response.main.temp;
            $("#current-temp").append(parseInt(currentTemp) + "&#8457;");
            
        },
        error: function(error) {
            console.log(error);
        }
    });      
}

// function getWeather(lat, long) 
// {
//     $.ajax({
//         url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&APPID=f359c189ba425c0490e35966335db4c7",
//         type: "GET",
//         data: {
//             format: 'json'
//         },
//         success: function(response) {
//             console.log(response);
//             console.log(response.city.name);
//             console.log();

//             for (var i = 0; i < 5; i++);
//             var date1 = (moment.unix(response.list[0].dt).format("LLL"));
//             $("#date1").append(date1);

//         },
//         error: function(error) {
//             console.log(error);
//         }
//     });      
// }
