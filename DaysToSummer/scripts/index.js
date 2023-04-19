// functions

$(function()
{
  var calcNewYear = setInterval(function(){
      date_future = new Date(2023,5,16,13,15);
      date_now = new Date();

      seconds = Math.floor((date_future - (date_now))/1000);
      minutes = Math.floor(seconds/60);
      hours = Math.floor(minutes/60);
      days = Math.floor(hours/24);
      
      hours = hours-(days*24);
      minutes = minutes-(days*24*60)-(hours*60);
      seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

      $("#time").html(days+" Ημέρες,<br>"+hours+" Ώρες,<br>"+minutes+" Λεπτά και<br>"+seconds+" Δευτ/λεπτα!");

      //$("#vDays").text(days+" Ημέρες");
      //$("#vHours").text(hours+" Ώρες");
      //$("#vMins").text(minutes+" Λεπτά");
      //$("#vSec").text(seconds+" Δευτ/λεπτα");
  },1000);
});
