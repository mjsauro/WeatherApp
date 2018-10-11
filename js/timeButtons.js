$(":button").click(function (event) {

    //we are slicing the id to get the actual number with the string "time"
    clickedHour = event.target.id.slice(4);
    getWeatherByTime(lat, long, clickedHour);
});

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