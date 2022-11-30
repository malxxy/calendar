$(document).ready(function() {
  // display time at top of calendar
  function beginTime () {
    var currentDateTime = dayjs().format("MM/DD/YY HH:mm:ss");
    $('#currentDay').text(currentDateTime);
  };

  setInterval(beginTime,1000);
  var currentTime = dayjs().format("HH:mm:ss"); // Clear calendar every 24 hour
  if (currentTime === "20:15:00") {
   $(".description").text("");
  };

  // Past, present, and future
  var currentHour = dayjs().format("H");
  console.log("current hour",currentHour);
  $(".hours").each(function() {
    var hour = $(this).attr("id");
    if (hour == currentHour) { 
      $(this).addClass("present"); //present
    } else if (hour > currentHour) {
      $(this).addClass("future"); // future
    } else {
      $(this).addClass("past"); // past
    }
  });

  var saveBtn = $('.btn saveBtn'); // Save button variable
  $(".saveBtn").click(function(){
    // localStorage
    var myEvent = $(this).siblings(".description").val(); // Traverse the DOM
    console.log("myEvent",myEvent); // console log entered event
    var myHour = $(this).parent().attr('id'); // Traverse the dom
    console.log("myHour",myHour); // console log hour

    // SET TIEM = store hour as key and event as item
    localStorage.setItem(myHour,JSON.stringify(myEvent));
  });
  for(let i =9;i<=17;i++){
    let pullEvent = JSON.parse(localStorage.getItem(i)); //getItem
    console.log("PULL EVENT",pullEvent);
    $("#"+i).children(".description").val(pullEvent);
  };
});