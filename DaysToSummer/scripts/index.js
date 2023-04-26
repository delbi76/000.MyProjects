// functions

$(function()
{
  var calcNewYear = setInterval(function()
  {
    date_future = new Date(2023,5,14,13,15);
    date_now = new Date();

    seconds = Math.floor((date_future - (date_now))/1000);
    minutes = Math.floor(seconds/60);
    hours = Math.floor(minutes/60);
    days = Math.floor(hours/24);
    weeks = Math.floor(days/7);
    
    //hours = hours-(days*24);
    //minutes = minutes-(days*24*60)-(hours*60);
    //seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

    days = days - (weeks*7);
    hours = hours - (weeks*7*24)-(days*24);
    minutes = minutes-(weeks*7*24*60)-(days*24*60)-(hours*60);
    seconds = seconds-(weeks*7*24*60*60)-(days*24*60*60)-(hours*60*60)-(minutes*60);

    var vWeeks = weeks>1 ? vWeeks="Εβδομάδες" : vWeeks="Εβδομάδα";
    var vdays = days>1 ? vdays="Ημέρες" : vdays="Ημέρα";
    var vhours = hours>1 ? vhours="Ώρες" : vhours="Ώρα";
    var vmins = minutes>1 ? vmins="Λεπτά" : vmins="Λεπτό";

    $("#time").html(weeks+" "+vWeeks+",<br>"+days+" "+vdays+",<br>"+hours+" "+vhours+",<br>"+minutes+" "+vmins+" και<br>"+seconds+" Δευτ/λεπτα!");
  },1000);
});
