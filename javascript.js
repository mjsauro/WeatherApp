$(document).ready(function () {
    function weatherReceived(response) {
        //title
        $(".title").append(response.query.results.channel.description);
        //$(".title").append(response.query.results.channel.item.title);

        //variable for fahrenheit

        var unit = response.query.results.channel.units.temperature;
        var high = ("High: ");
        var low = ("Low: ");
        //curent conditions
        var current = response.query.results.channel.item.condition;
        //$(".current").append(current.date);
        $(".currenttemp").prepend(current.temp);
        $(".currenttext").append(current.text);


        //day1

        var forecast = response.query.results.channel.item.forecast[0];

        $(".day1d").append(forecast.date);
        $(".day1day").append(forecast.day);
        $(".day1h").append((high) + (forecast.high) + (unit));
        $(".day1l").append((low) + (forecast.low) + (unit));
        $(".day1t").append(forecast.text);

        //day2
        var forecast = response.query.results.channel.item.forecast[1];
        $(".day2d").append(forecast.date);
        $(".day2day").append(forecast.day);
        $(".day2h").append((high) + (forecast.high) + (unit));
        $(".day2l").append((low) + (forecast.low) + (unit));
        $(".day2t").append(forecast.text);

        //day3
        var forecast = response.query.results.channel.item.forecast[2];
        $(".day3d").append(forecast.date);
        $(".day3day").append(forecast.day);
        $(".day3h").append((high) + (forecast.high) + (unit));
        $(".day3l").append((low) + (forecast.low) + (unit));
        $(".day3t").append(forecast.text);

        //day4
        var forecast = response.query.results.channel.item.forecast[3];
        $(".day4d").append(forecast.date);
        $(".day4day").append(forecast.day);
        $(".day4h").append((high) + (forecast.high) + (unit));
        $(".day4l").append((low) + (forecast.low) + (unit));
        $(".day4t").append(forecast.text);

        //day5
        var forecast = response.query.results.channel.item.forecast[4];
        $(".day5d").append(forecast.date);
        $(".day5day").append(forecast.day);
        $(".day5h").append((high) + (forecast.high) + (unit));
        $(".day5l").append((low) + (forecast.low) + (unit));
        $(".day5t").append(forecast.text);

        //day6
        var forecast = response.query.results.channel.item.forecast[5];
        $(".day6d").append(forecast.date);
        $(".day6day").append(forecast.day);
        $(".day6h").append((high) + (forecast.high) + (unit));
        $(".day6l").append((low) + (forecast.low) + (unit));
        $(".day6t").append(forecast.text);

        //day7
        var forecast = response.query.results.channel.item.forecast[6];
        $(".day7d").append(forecast.date);
        $(".day7day").append(forecast.day);
        $(".day7h").append((high) + (forecast.high) + (unit));
        $(".day7l").append((low) + (forecast.low) + (unit));
        $(".day7t").append(forecast.text);

        //day8
        var forecast = response.query.results.channel.item.forecast[7];
        $(".day8d").append(forecast.date);
        $(".day8day").append(forecast.day);
        $(".day8h").append((high) + (forecast.high) + (unit));
        $(".day8l").append((low) + (forecast.low) + (unit));
        $(".day8t").append(forecast.text);

        //day9

        var forecast = response.query.results.channel.item.forecast[8];
        $(".day9d").append(forecast.date);
        $(".day9day").append(forecast.day);
        $(".day9h").append((high) + (forecast.high) + (unit));
        $(".day9l").append((low) + (forecast.low) + (unit));
        $(".day9t").append(forecast.text);

        //day10
        var forecast = response.query.results.channel.item.forecast[9];
        $(".day10d").append(forecast.date);
        $(".day10day").append(forecast.day);
        $(".day10h").append((high) + (forecast.high) + (unit));
        $(".day10l").append((low) + (forecast.low) + (unit));
        $(".day10t").append(forecast.text);

    }

    $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', weatherReceived);

    $("#submit").click(function () {
        alert("Hello world!");
    });

});
