$(document).ready(function () {

    //location fired by default
    getLocation();

    //getLocation function
    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    //position is translated lat and long
    function showPosition(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log("Latitude: " + lat +
            " Longitude: " + long);

        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=SELECT * FROM geo.places WHERE text=\"(" + lat + "," + long + ")\"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", clear(), locationReceived);
    }

    //latittude and longitude converted to city
    function locationReceived(response) {

        console.log(response.query.results.place.locality1.content);
        var location = response.query.results.place.locality1.content;

        $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', clear(), weatherTry);

    }


    //on submit, the city and state are detected.  if values are blank, location is detected.
    $("#submit").on('click', function () {
        console.log("click fired!");
        if (($('#city-input').val() == '') && ($('#state-input').val() == '')) {
            console.log("submit null");
            getLocation();
        } else {
            var value = $('#city-input').val();
            var value2 = $('#state-input').val();
            console.log("submit fired");
            $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + value + ', ' + value2 + '")&format=json', clear(), weatherTry);
        }
    });

    //location is detected
    $("#detect").on('click', function () {
        console.log("Detect fired!");
        getLocation();
    });

    //title is cleared
    function clear() {
        $(".title").empty();
        $(".currenttemp").empty();
        $(".currenttext").empty();
        $(".current-icon").empty();
        $("article > div > div > div").empty();
    }

    //weather response
    function weatherTry(response) {
        //title
        $(".title").append(response.query.results.channel.description);

        //variable for fahrenheit

        var unit = response.query.results.channel.units.temperature;
        var high = ("High: ");
        var low = ("Low: ");

        var forecast = response.query.results.channel.item.forecast[0];


        //curent conditions
        var current = response.query.results.channel.item.condition;
        $(".currenttemp").prepend((current.temp) + "F&deg;");
        $(".currenttext").append(current.text);
        $(".current-icon").append(code);

        $(".weatherTemplate").show();
        $(".weatherTemplate").empty();
        high = ("High: ");
        low = ("Low: ");

        for (var i = 0; i <= 9; i++) {
            console.log("try fired");
            forecast = response.query.results.channel.item.forecast[i];
            var dayOfWeek = forecast.day;
            //rearrange the date
            date = forecast.date;
            day = date.slice(0, 2);
            month = date.slice(2, 6);
            year = date.slice(7, 11);
            newDate = (month + " " + day + ", " + year);

            var panel = document.createElement("div");
            panel.className = 'dayBox col-xs-4 col-sm-2 text-center';

            $(".weatherTemplate").append(panel);
            var createDiv = document.createElement("div");
            $(createDiv).addClass("weatherDay");
            $(createDiv).append(getDay(dayOfWeek) + "<br /> ").appendTo(panel);
            $(createDiv).addClass("weatherDate");
            $(createDiv).append(newDate + "<br/>").appendTo(panel);
            $(createDiv).addClass("weatherHigh ");
            $(createDiv).append((high) + (forecast.high + (' F&deg') + "<br/>")).appendTo(panel);
            $(createDiv).addClass("weatherLow ");
            $(createDiv).append((low) + (forecast.low + (' F&deg') + "<br/>")).appendTo(panel);
            $(createDiv).addClass("weatherText ");
            $(createDiv).append(forecast.text + "<br/>").appendTo(panel);
            $(createDiv).append(code).appendTo(panel);

            //get the full name of the day of the week
            
        }
        function getDay(item) {
            switch (item) {
                case "Sun":
                    return "Sunday, ";
                case "Mon":
                    return "Monday, ";
                case "Tue":
                    return "Tuesday, ";
                case "Wed":
                    return "Wednesday, ";
                case "Thu":
                    return "Thursday, ";
                case "Fri":
                    return "Friday, ";
                case "Sat":
                    return "Saturday, ";
            }
        }
        function code() {
            switch (forecast.code) {
                case "0":
                    return ("<img class='img-responsive' src='images/weather/tornado.svg' > ");

                case "1":
                    return ("<img class='img-responsive' src='images/weather/hurricane.png' > ");

                case "2":
                    return ("<img class='img-responsive' src='images/weather/hurricane.png' > ");

                case "3":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm.svg' > ");

                case "4":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm.svg' > ");

                case "5":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "6":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "7":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "8":
                    return ("<img class='img-responsive' src='images/weather/snowmix.png' > ");

                case "9":
                    return ("<img class='img-responsive' src='images/weather/drizzle.svg' > ");

                case "10":
                    return ("<img class='img-responsive' src='images/weather/sleet.svg' > ");

                case "11":
                    return ("<img class='img-responsive' src='images/weather/sleet.svg' > ");

                case "12":
                    return ("<img class='img-responsive' src='images/weather/rain.svg' > ");

                case "13":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "14":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "15":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "16":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "17":
                    return ("<img class='img-responsive' src='images/weather/hail.svg' > ");

                case "18":
                    return ("<img class='img-responsive' src='images/weather/sleet.svg' > ");

                case "19":
                    return ("<img class='img-responsive' src='images/weather/dusty.png' > ");

                case "20":
                    return ("<img class='img-responsive' src='images/weather/foggy.svg' > ");

                case "21":
                    return ("<img class='img-responsive' src='images/weather/haze.png' > ");

                case "22":
                    return ("<img class='img-responsive' src='images/weather/haze.png' > ");

                case "23":
                    return ("<img class='img-responsive' src='images/weather/windy.svg' > ");

                case "24":
                    return ("<img class='img-responsive' src='images/weather/windy2.svg' > ");

                case "25":
                    return ("<img class='img-responsive' src='images/weather/cold.png' > ");

                case "26":
                    return ("<img class='img-responsive' src='images/weather/cloudy.svg' > ");

                case "27":
                    return ("<img class='img-responsive' src='images/weather/partlycloudynight.svg' > ");

                case "28":
                    return ("<img class='img-responsive' src='images/weather/partlycloudyday.svg' > ");

                case "29":
                    return ("<img class='img-responsive' src='images/weather/partlycloudynight.svg' > ");

                case "30":
                    return ("<img class='img-responsive' src='images/weather/partlycloudyday.svg' > ");

                case "31":
                    return ("<img class='img-responsive' src='images/weather/clearnight.svg' > ");

                case "32":
                    return ("<img class='img-responsive' src='images/weather/sunny.svg' > ");

                case "33":
                    return ("<img class='img-responsive' src='images/weather/clearnight.svg' > ");

                case "34":
                    return ("<img class='img-responsive' src='images/weather/clearday.svg' > ");

                case "35":
                    return ("<img class='img-responsive' src='images/weather/hail.svg' > ");

                case "36":
                    return ("<img class='img-responsive' src='images/weather/sunny.svg' > ");

                case "37":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm2.svg' > ");

                case "38":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm3.svg' > ");

                case "39":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm4.svg' > ");

                case "40":
                    return ("<img class='img-responsive' src='images/weather/rainshowers.svg' > ");

                case "41":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "42":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "43":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");

                case "44":
                    return ("<img class='img-responsive' src='images/weather/partlycloudyday.svg' > ");

                case "45":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm5.svg' > ");

                case "46":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm2.svg' > ");

                case "47":
                    return ("<img class='img-responsive' src='images/weather/thundershowers.svg' > ");

                default:
                    return ("<img class='img-responsive' src='images/weather/na.svg' > ");
            }
        }

    }

});