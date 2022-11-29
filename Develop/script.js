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
      $(this).css("background-color","blue"); //present
    } else if (hour > currentHour) {
      $(this).css("background-color","yellow"); // future
    } else {
      $(this).css("background-color","pink"); // past
    }
  });
  // Initalize localStorage
  var saveBtn = $('.btn saveBtn'); // Save button variable

  $(".saveBtn").click(function(){
    // localStorage
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    var myEvent = $(this).siblings(".description").val(); // Traverse the DOM
    console.log("myEvent",myEvent);

    var myHour = $(this).parent().attr('id');
    console.log("myHour",myHour); // hour that event is entered into

    // store hour as key and event as item
    localStorage.setItem(myHour,JSON.stringify(myEvent)); // set Item of textarea
    
    let pullEvent = JSON.parse(localStorage.getItem(myHour,myEvent)); // get item from storage
    $(this).siblings("textarea").append(pullEvent);
  });
});