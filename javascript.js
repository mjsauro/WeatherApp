$(document).ready(function () {
    function clear() {
        $(".title").empty();
        $(".currenttemp").empty();
        $(".currenttext").empty();
        $(".current-icon").empty();
        $("article > div > div > div").empty();
    }


    function weatherReceived(response) {


        //title
        $(".title").append(response.query.results.channel.description);

        //variable for fahrenheit

        var unit = response.query.results.channel.units.temperature;
        var high = ("High: ");
        var low = ("Low: ");

        var forecast = response.query.results.channel.item.forecast[0]
        //curent conditions
        var current = response.query.results.channel.item.condition;
        $(".currenttemp").prepend(current.temp);
        $(".currenttext").append(current.text);
        $(".current-icon").append(code);

        //day1

        var forecast = response.query.results.channel.item.forecast[0];

        $(".day1d").append(forecast.date);
        $(".day1day").append(forecast.day);
        $(".day1h").append((high) + (forecast.high) + (unit));
        $(".day1l").append((low) + (forecast.low) + (unit));
        $(".day1t").append(forecast.text);
        $(".day1c").append(code);

        //day2
        var forecast = response.query.results.channel.item.forecast[1];
        $(".day2d").append(forecast.date);
        $(".day2day").append(forecast.day);
        $(".day2h").append((high) + (forecast.high) + (unit));
        $(".day2l").append((low) + (forecast.low) + (unit));
        $(".day2t").append(forecast.text);
        $(".day2c").append(code);

        //day3
        var forecast = response.query.results.channel.item.forecast[2];
        $(".day3d").append(forecast.date);
        $(".day3day").append(forecast.day);
        $(".day3h").append((high) + (forecast.high) + (unit));
        $(".day3l").append((low) + (forecast.low) + (unit));
        $(".day3t").append(forecast.text);
        $(".day3c").append(code);

        //day4
        var forecast = response.query.results.channel.item.forecast[3];
        $(".day4d").append(forecast.date);
        $(".day4day").append(forecast.day);
        $(".day4h").append((high) + (forecast.high) + (unit));
        $(".day4l").append((low) + (forecast.low) + (unit));
        $(".day4t").append(forecast.text);
        $(".day4c").append(code);

        //day5
        var forecast = response.query.results.channel.item.forecast[4];
        $(".day5d").append(forecast.date);
        $(".day5day").append(forecast.day);
        $(".day5h").append((high) + (forecast.high) + (unit));
        $(".day5l").append((low) + (forecast.low) + (unit));
        $(".day5t").append(forecast.text);
        $(".day5c").append(code);

        //day6
        var forecast = response.query.results.channel.item.forecast[5];
        $(".day6d").append(forecast.date);
        $(".day6day").append(forecast.day);
        $(".day6h").append((high) + (forecast.high) + (unit));
        $(".day6l").append((low) + (forecast.low) + (unit));
        $(".day6t").append(forecast.text);
        $(".day6c").append(code);

        //day7
        var forecast = response.query.results.channel.item.forecast[6];
        $(".day7d").append(forecast.date);
        $(".day7day").append(forecast.day);
        $(".day7h").append((high) + (forecast.high) + (unit));
        $(".day7l").append((low) + (forecast.low) + (unit));
        $(".day7t").append(forecast.text);
        $(".day7c").append(code);

        //day8
        var forecast = response.query.results.channel.item.forecast[7];
        $(".day8d").append(forecast.date);
        $(".day8day").append(forecast.day);
        $(".day8h").append((high) + (forecast.high) + (unit));
        $(".day8l").append((low) + (forecast.low) + (unit));
        $(".day8t").append(forecast.text);
        $(".day8c").append(code);

        //day9

        var forecast = response.query.results.channel.item.forecast[8];
        $(".day9d").append(forecast.date);
        $(".day9day").append(forecast.day);
        $(".day9h").append((high) + (forecast.high) + (unit));
        $(".day9l").append((low) + (forecast.low) + (unit));
        $(".day9t").append(forecast.text);
        $(".day9c").append(code);

        //day10
        var forecast = response.query.results.channel.item.forecast[9];
        $(".day10d").append(forecast.date);
        $(".day10day").append(forecast.day);
        $(".day10h").append((high) + (forecast.high) + (unit));
        $(".day10l").append((low) + (forecast.low) + (unit));
        $(".day10t").append(forecast.text);
        $(".day10c").append(code);

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


    $("#submit").on('click', function () {
        var value = $('#city-input').val();
        var value2 = $('#state-input').val();
        console.log(value + ' , ' + value2);

        $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + value + ', ' + value2 + '")&format=json', clear(), weatherReceived);
    })



    $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', weatherReceived);

});
