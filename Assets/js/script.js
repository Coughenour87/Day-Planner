var currentHour = new Date().getHours();//Current hour in military time
    $("#currentDay").text( Date(Date.now()))
var setTime = setInterval(function () {
    
    var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
    $("#currentDay").text(currentDateAndTime)
}, 1000);

for (var i = 9; i < 18; i++) {
    var todo = localStorage.getItem("hour-"+i)
    $("#textArea"+i).val(todo)
    if(i === currentHour) $("#textArea"+i).addClass("present")
    if(i < currentHour)$("#textArea"+i).addClass("past") 
    console.log(i > currentHour)
    if(i > currentHour)$("#textArea"+i).addClass("future") 
}

$(".saveBtn").click(function () {
   var hour = $(this).val()

  var todo = $("#textArea"+hour).val()
  console.log(todo)
  localStorage.setItem("hour-"+hour, todo)
})