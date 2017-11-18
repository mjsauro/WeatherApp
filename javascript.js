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
    })

    //location is detected
    $("#detect").on('click', function () {
        console.log("Detect fired!");
        getLocation();
    })

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
        var high = ("High: ");
        var low = ("Low: ");

        for (var i = 0; i <= 9; i++) {
            console.log("try fired");
            var forecast = response.query.results.channel.item.forecast[i];
            var dayOfWeek = forecast.day;
            //rearrange the date
            var date = forecast.date;
            var day = date.slice(0, 2);
            var month = date.slice(2, 6);
            var year = date.slice(7, 11);
            var newDate = (month + " " + day + ", " + year)

            var panel = document.createElement("div");
            panel.className = 'dayBox col-xs-4 col-sm-2 text-center';
            var panel
            $(".weatherTemplate").append(panel);
            var createDiv = document.createElement("div");
            $(createDiv).addClass("weatherDay")
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
            function getDay(item) {
                switch (item) {
                    case "Sun":
                        return "Sunday, ";
                        break;
                    case "Mon":
                        return "Monday, ";
                        break;
                    case "Tue":
                        return "Tuesday, ";
                        break;
                    case "Wed":
                        return "Wednesday, ";
                        break;
                    case "Thu":
                        return "Thursday, ";
                        break;
                    case "Fri":
                        return "Friday, ";
                        break;
                    case "Sat":
                        return "Saturday, ";
                        break;
                }
            }
        }

        function code() {
            switch (forecast.code) {
                case "0":
                    return ("<img class='img-responsive' src='images/weather/tornado.svg' > ");
                    break;
                case "1":
                    return ("<img class='img-responsive' src='images/weather/hurricane.png' > ");
                    break;
                case "2":
                    return ("<img class='img-responsive' src='images/weather/hurricane.png' > ");
                    break;
                case "3":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm.svg' > ");
                    break;
                case "4":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm.svg' > ");
                    break;
                case "5":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "6":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "7":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "8":
                    return ("<img class='img-responsive' src='images/weather/snowmix.png' > ");
                    break;
                case "9":
                    return ("<img class='img-responsive' src='images/weather/drizzle.svg' > ");
                    break;
                case "10":
                    return ("<img class='img-responsive' src='images/weather/sleet.svg' > ");
                    break;
                case "11":
                    return ("<img class='img-responsive' src='images/weather/sleet.svg' > ");
                    break;
                case "12":
                    return ("<img class='img-responsive' src='images/weather/rain.svg' > ");
                    break;
                case "13":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "14":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "15":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "16":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "17":
                    return ("<img class='img-responsive' src='images/weather/hail.svg' > ");
                    break;
                case "18":
                    return ("<img class='img-responsive' src='images/weather/sleet.svg' > ");
                    break;
                case "19":
                    return ("<img class='img-responsive' src='images/weather/dusty.png' > ");
                    break;
                case "20":
                    return ("<img class='img-responsive' src='images/weather/foggy.svg' > ");
                    break;
                case "21":
                    return ("<img class='img-responsive' src='images/weather/haze.png' > ");
                    break;
                case "22":
                    return ("<img class='img-responsive' src='images/weather/haze.png' > ");
                    break;
                case "23":
                    return ("<img class='img-responsive' src='images/weather/windy.svg' > ");
                    break;
                case "24":
                    return ("<img class='img-responsive' src='images/weather/windy2.svg' > ");
                    break;
                case "25":
                    return ("<img class='img-responsive' src='images/weather/cold.png' > ");
                    break;
                case "26":
                    return ("<img class='img-responsive' src='images/weather/cloudy.svg' > ");
                    break;
                case "27":
                    return ("<img class='img-responsive' src='images/weather/partlycloudynight.svg' > ");
                    break;
                case "28":
                    return ("<img class='img-responsive' src='images/weather/partlycloudyday.svg' > ");
                    break;
                case "29":
                    return ("<img class='img-responsive' src='images/weather/partlycloudynight.svg' > ");
                    break;
                case "30":
                    return ("<img class='img-responsive' src='images/weather/partlycloudyday.svg' > ");
                    break;
                case "31":
                    return ("<img class='img-responsive' src='images/weather/clearnight.svg' > ");
                    break;
                case "32":
                    return ("<img class='img-responsive' src='images/weather/sunny.svg' > ");
                    break;
                case "33":
                    return ("<img class='img-responsive' src='images/weather/clearnight.svg' > ");
                    break;
                case "34":
                    return ("<img class='img-responsive' src='images/weather/clearday.svg' > ");
                    break;
                case "35":
                    return ("<img class='img-responsive' src='images/weather/hail.svg' > ");
                    break;
                case "36":
                    return ("<img class='img-responsive' src='images/weather/sunny.svg' > ");
                    break;
                case "37":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm2.svg' > ");
                    break;
                case "38":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm3.svg' > ");
                    break;
                case "39":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm4.svg' > ");
                    break;
                case "40":
                    return ("<img class='img-responsive' src='images/weather/rainshowers.svg' > ");
                    break;
                case "41":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "42":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "43":
                    return ("<img class='img-responsive' src='images/weather/snow.svg' > ");
                    break;
                case "44":
                    return ("<img class='img-responsive' src='images/weather/partlycloudyday.svg' > ");
                    break;
                case "45":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm5.svg' > ");
                    bresnowshowersak;
                case "46":
                    return ("<img class='img-responsive' src='images/weather/thunderstorm2.svg' > ");
                    break;
                case "47":
                    return ("<img class='img-responsive' src='images/weather/thundershowers.svg' > ");
                    break;
                default:
                    return ("<img class='img-responsive' src='images/weather/na.svg' > ");
            }
        }

    }

});
