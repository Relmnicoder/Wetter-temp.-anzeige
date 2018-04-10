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
                firstDay = Math.round((firstDay / 8) - 273.15);
                secondDay = Math.round((secondDay / 8) - 273.15);
                thirdDay = Math.round((thirdDay / 8) - 273.15);
                fourthDay = Math.round((fourthDay / 8) - 273.15);
                fifthDay = Math.round((fifthDay / 8) - 273.15);

                var tage = [firstDay, secondDay, thirdDay, fourthDay, fifthDay];

                for (i = 0; i < tage.length; i++) {
                    $("#row" + (i + 1)).html("<td scope='row'> " + tage[i] + "°C</td>");
                }

                for (i = 0; i < tage.length; i++) {
                    if (aktTempRound < tage[i]) {
                        $("#row"+(i + 1)).removeClass("getsColder");
                        $("#row"+(i + 1)).addClass("getsWarmer");
                    }
                    else {
                        $("#row"+(i + 1)).removeClass("getsWarmer");
                        $("#row"+(i + 1)).addClass("getsColder");
                    }
                }
            })

    })

})
