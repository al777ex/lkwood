(function() {
    var cx = '017643444788069204610:4gvhea_mvga'; // Insert your own Custom Search engine ID here
    var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
    gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
  })();



var lakewood = "44107";


//var queryURL = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + lakewood + "?apikey=COhiSXg4Bvdt3VlA4u5Mz3jhSlzWenZb&details=false";



//Creating an AJAX call 
 $.ajax({
  url: queryURL,
 method: "GET"
 }).then(function (response) {
     var results= response.DailyForecasts;
    for (var i = 0; i < results.length; i++) {
        var Sources=results[i].Sources;
        var d = new Date(); 
        var IconPhrase = results[i].Day.IconPhrase;
        var TemperatureMinimumValueUnit = results[i].Temperature.Minimum.Value;
  var myjson1=JSON.stringify(Sources);
  var myjson=d.toDateString("<br>");
  var myjson2= JSON.stringify(IconPhrase);
  var myjson3= JSON.stringify(TemperatureMinimumValueUnit + "&#8457");
  
  document.querySelector("#data1").innerHTML=myjson1;
  document.querySelector("#data").innerHTML = myjson;
   document.querySelector("#data2").innerHTML= myjson2;
   document.querySelector("#data3").innerHTML=myjson3;
   console.log(response);

 
 } 

})


