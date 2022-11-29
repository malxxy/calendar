// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var root = $("root"); Is this what the above question refers to?
$(document).ready(function() {

  // Initalize localStorage
  var savedData = localStorage.getItem('myEvent');
  if(!savedData) {
    savedData = [];
    localStorage.setItem("myEvent", JSON.stringify(savedData))
  }

  // Clear calendar every 24 hour
  var currentTime = dayjs().format("HH:mm:ss");
  if (currentTime === "20:15:00") {
   $(".description").text("");
  };

  var saveBtn = $('.btn saveBtn'); // Save button variable

// display time at top of calendar
  function beginTime () {
    var currentDateTime = dayjs().format("MM/DD/YY HH:mm:ss");
    $('#currentDay').text(currentDateTime);
  };

  setInterval(beginTime,1000);

  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").click(function(){
    // localStorage
    var thing = $(this);  // capture the user input
    console.log(thing.siblings(".description").val());  // Traverse the DOM
    var myEvent = thing.siblings(".description").val();
    // localStorage.setItem("myEvent",JSON.stringify(myEvent));  // we just overwrite the existing data
    console.log(myEvent);
    var myHour = $(this).parent().attr('id');
    console.log(myHour); // hour that event is entered into
    let pullEvent = JSON.parse(localStorage.getItem("myEvent"));
    console.log(pullEvent);
      // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
    var temp = {
      hour: myHour,
      event: myEvent
    };

  // Add our new data to our dataset
  pullEvent.push(temp);
  console.log(pullEvent);
  let JSONevents = JSON.stringify(pullEvent);
  localStorage.setItem("myEvent", JSON.stringify(pullEvent));
  localStorage.setItem(myHour, JSON.stringify(myEvent));
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // Past, present and future

  var currentHour = dayjs().format("H");
  console.log("current hour",currentHour);

  var allHours = $(".hours");
  hourArray = [];
  console.log("allHours",allHours);
  for (let index = 0; index < allHours.length; index++) {
    var hours = $(allHours[index]).attr("id");
    var hourOnly = hours.replace('hour-','');
    hourArray.push(hourOnly);
  }

  console.log("hourArray",hourArray);

  for (let index = 0; index < hourArray.length; index++) {
    if (hourArray[index] == currentHour) {
      $(hours[index]).css("background-color","blue");
    } else if (hourArray[index] > currentHour) {
      $(hours[index]).css("background-color","lavender");
    } else {
      $(hours).css("background-color","pink");
    }
  };
});