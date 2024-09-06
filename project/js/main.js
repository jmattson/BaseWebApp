$(document).ready(function(){
  getWeather();
})

function getWeather() {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&appid=f15aa7764fa2122a28dd72e83b1fde5f";

  $.ajax(url,{success: function(data){
    // console.log(data);
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
  }})
}


