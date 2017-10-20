$(document).ready(function () {
    function weatherReceived(response) {
        $("section").append(response.query.results.channel.description);
        $("section").append(response.query.results.channel.item.title);
    }

    $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', weatherReceived);





    $("#submit").click(function () {
        alert("Hello world!");
    });





});
