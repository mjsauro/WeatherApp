$(document).ready(function () {
    function weatherReceived(response) {
        //title
        $(".title").append(response.query.results.channel.description);
        $("title").append(response.query.results.channel.item.title);

        //curent conditions
        var current = response.query.results.channel.item.condition;
        $(".current").append(current.date);
        $(".current").append(current.temp);
        $(".current").append(current.text);

        //day1

        var forecast = response.query.results.channel.item.forecast[0];

        $(".day1d").append(forecast.date);
        $(".day1day").append(forecast.day);
        $(".day1h").append(forecast.high);
        $(".day1l").append(forecast.low);
        $(".day1t").append(forecast.text);

        //day2
        var forecast = response.query.results.channel.item.forecast[1];
        $(".day2d").append(forecast.date);
        $(".day2day").append(forecast.day);
        $(".day2h").append(forecast.high);
        $(".day2l").append(forecast.low);
        $(".day2t").append(forecast.text);

        //day3
        var forecast = response.query.results.channel.item.forecast[2];
        $(".day3d").append(forecast.date);
        $(".day3day").append(forecast.day);
        $(".day3h").append(forecast.high);
        $(".day3l").append(forecast.low);
        $(".day3t").append(forecast.text);

        //day4
        var forecast = response.query.results.channel.item.forecast[3];
        $(".day4d").append(forecast.date);
        $(".day4day").append(forecast.day);
        $(".day4h").append(forecast.high);
        $(".day4l").append(forecast.low);
        $(".day4t").append(forecast.text);

        //day5
        var forecast = response.query.results.channel.item.forecast[4];
        $(".day5d").append(forecast.date);
        $(".day5day").append(forecast.day);
        $(".day5h").append(forecast.high);
        $(".day5l").append(forecast.low);
        $(".day5t").append(forecast.text);

    }

    $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', weatherReceived);

    $("#submit").click(function () {
        alert("Hello world!");
    });

});
