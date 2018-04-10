$(document).ready(function () {
    $("#btnSearch").click(function () {
        var url = $("#textInput").val();
        todayWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + url + "&appid=ee595a2e51b9aa75efcfd4297fb55b8c";
        forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + url + "&appid=ee595a2e51b9aa75efcfd4297fb55b8c";


        $.when($.getJSON(todayWeatherUrl), $.getJSON(forecastUrl))
            .done(function (a1, a2, ) {

                var aktTempRound = Math.round(a1[0].main.temp - 273.15);
                $("#aktTemp").empty().append(" " + aktTempRound + "°C");

                var firstDay = 0;
                var secondDay = 0;
                var thirdDay = 0;
                var fourthDay = 0;
                var fifthDay = 0;
                var avgDays = 0;
                for (i = 0; i < (a2[0].list).length; i++) {
                    if (i < 8) {
                        firstDay += a2[0].list[i].main.temp;
                    }
                    else if (i > 7 && i < 16) {
                        secondDay += a2[0].list[i].main.temp;
                    }
                    else if (i > 15 && i < 24) {
                        thirdDay += a2[0].list[i].main.temp;
                    }
                    else if (i > 23 && i < 32) {
                        fourthDay += a2[0].list[i].main.temp;
                    }
                    else {
                        fifthDay += a2[0].list[i].main.temp;
                    }
                    avgDays += a2[0].list[i].main.temp;
                }
                $("#avgTemp").html(" " + Math.round((firstDay / 8) -273.15)  + "°C");
                $("#avgTemp").append(" " + Math.round((secondDay / 8) -273.15)  + "°C");
                $("#avgTemp").append(" " + Math.round((thirdDay / 8) - 273.15) + "°C");
                $("#avgTemp").append(" " + Math.round((fourthDay / 8) -273.15) + "°C");
                $("#avgTemp").append(" " + Math.round((fifthDay / 8) -273.15) + "°C");

                if (aktTempRound < Math.round((avgDays / 8) -273.15)){
                    $("#avgTemp").addClass("getsWarmer");
                }
                else {
                    $("avgTemp").addClass("getsColder");
                }
            })

    })

})
