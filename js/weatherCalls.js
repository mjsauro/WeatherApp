


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



function getWeatherByTime(lat, long, clickedHour) {

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&units=imperial" + "&APPID=f359c189ba425c0490e35966335db4c7",
        type: "GET",
        data: {
            format: 'json'
        },
        success: function (r) {
            r = r.list[clickedHour];
            console.log(r);
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