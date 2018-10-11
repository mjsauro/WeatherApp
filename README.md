# WeatherApp
Weather App using HTML, CSS, Bootstrap, jQuery, and the Open Weather API

This project previously used the Yahoo Weather API, which suddenly stopped working.  Once I discovered this, I decided to switch the API to Open Weather.  The app shows the current weather conditions based on your location, and there are buttons in 3 hour increments for the next 24 hours to get the forecast at those times.

All of the calls to the API are done jQuery.  

I used some external tools to assist, especially because many of the responses from the Open Weather API do not come back in a user friendly format.

1.  The date returned by https://momentjs.com/he Open Weather API is in Unix time.  Rather than reinvent the wheel to parse it, there is a great JS utility called moment.js.  
2.  The current conditions come back in all lowercase.  My thought was that title casing would be much better and I found a nice module that would convert strings to title casing. /* To Title Case © 2018 David Gouch | https://github.com/gouch/to-title-case */
3.  The Open Weather API returns the wind direction in "degrees".  A quick search found some nice code that will convert it for me so I didn't have to write a very long if or switch statement. https://gist.github.com/felipeskroski/8aec22f01dabdbf8fb6b
4.  Believe it or not, the Open Weather API does NOT return the state associated with the city.  The eaisest way to get this was to make a call to one of Google's map/location APIs.
5.  Open Weather's icons are terrible, and I found "Open Weather Font" and use their icons instead.  https://websygen.github.io/owfont/
