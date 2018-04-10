$(document).ready(function () {
    $("#btnSearch").click(function () {
        var url = $("#textInput").val();
        todayWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + url + "&appid=ee595a2e51b9aa75efcfd4297fb55b8c"
        forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + url + "&appid=ee595a2e51b9aa75efcfd4297fb55b8c"
        
        // var deferred = $.Deferred();
        // var promiseForecast = forcast();

        // $.getJSON(todayWeatherUrl)
        // .then(function (data) {
        //     console.log(data.main.temp) 
        // })
        $.getJSON(forecastUrl)
        .then(function (data) {
            for(i = 0; i < (data.list).length; i++){
            console.log(data.list[i].main.temp) 
        }
        })
        
        
        
        
        
        // promiseForecast.done(function (data) {
        //     console.log(data)
        // })
        // promiseForecast.fail(function (data) {
        //     alert("Problem with connecting to API")
        // })
    })
})


// function forcast() {
//     return $.ajax({
//         type: "GET",
//         dataType: "json",
//         url: forecastUrl,
//     })
// }
//  function weather() {
//     return $.ajax({
//         type: "GET",
//         dataType: "json",
//         url: todayWeatherUrl,
//     })
//  }