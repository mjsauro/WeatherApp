$(document).ready(function () {

    //everything starts here
    getLocation();

});


$(":button").click(function (event) {

    //we are slicing the id to get the actual number with the string "time"
    clickedHour = event.target.id.slice(4);
    getWeatherByTime(lat, long, clickedHour);
});

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

function getCurrentWeather(lat, long) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial" + "&APPID=f359c189ba425c0490e35966335db4c7",
        type: "GET",
        data: {
            format: 'json'
        },
        success: function (r) {
            currentDate = moment.unix(r.dt).format('MMMM Do YYYY');
            $("#current-date").append(currentDate);
            currentTime = moment.unix(r.dt).format('dddd h:mm a');
            $("#current-time").append(currentTime);
            currentCondition = r.weather[0].description;
            $("#current-condition").append(currentCondition.toTitleCase());
            iconID = r.weather[0].id;
            dayOrNight = r.weather[0].icon.slice(-1);
            $("#current-icon").addClass("owf-2x owf owf-" + iconID + "-" + dayOrNight + "");
            currentTemp = r.main.temp;
            $("#current-temp").append(parseInt(currentTemp) + "&#8457;");
            if (typeof r.rain !== "undefined") {
                var rain = r.rain["1h"];
                $("#rain").append(rain);
            } else {
                $("#rain-span").hide();
            }
            humidity = r.main.humidity;
            $("#humidity").append(humidity);
            windDeg = r.wind.deg;
            windSpeed = r.wind.speed;
            $("#wind").append(windSpeed + " mph " + convertDeg(windDeg));
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getButtonTimes(lat, long) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&APPID=f359c189ba425c0490e35966335db4c7",
        type: "GET",
        data: {
            format: 'json'
        },
        success: function (r) {
            for (var i = 0; i <= 7; i++) {
                var time = moment.unix(r.list[i].dt).format('h:mm a');
                $("#time" + i).text(time);

            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function getWeatherByTime(lat, long, clickedHour) {

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&units=imperial" + "&APPID=f359c189ba425c0490e35966335db4c7",
        type: "GET",
        data: {
            format: 'json'
        },
        success: function (r) {
            r = r.list[clickedHour];
            currentTime = moment.unix(r.dt).format('dddd h:mm a');
            $("#current-time").text("").append(currentTime);
            currentCondition = r.weather[0].description;
            $("#current-condition").text("").append(currentCondition.toTitleCase());
            iconID = r.weather[0].id;
            dayOrNight = r.weather[0].icon.slice(-1);
            $("#current-icon").removeClass().addClass("owf-2x owf owf-" + iconID + "-" + dayOrNight + "");
            currentTemp = r.main.temp;
            $("#current-temp").text("").append(parseInt(currentTemp) + "&#8457;");
            humidity = r.main.humidity;
            $("#humidity").text("").append(humidity);
            windDeg = r.wind.deg;
            windSpeed = r.wind.speed;
            $("#wind").text("").append(windSpeed + " mph " + convertDeg(windDeg));

        },
        error: function (error) {
            console.log(error);
        }
    });
}
