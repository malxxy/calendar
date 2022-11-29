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
// var currentTime = dayjs().format("HH:mm:ss");
// if (currentTime === "20:15:00") {
//   $(".description").text("");
// };

var saveBtn = $('.btn saveBtn');

// display time at top of calendar
function beginTime () {
  var currentDateTime = dayjs().format("MM/DD/YY HH:mm:ss");
  $('#currentDay').text(currentDateTime);
};

setInterval(beginTime,1000);

$(".saveBtn").click(function(){
  // localStorage
  var thing = $(this);  // capture the user input
  // Traverse the DOM
  console.log(thing.siblings());
  console.log(thing.siblings(".description"));
  console.log(thing.siblings(".description").val());  

  var myEvent = thing.siblings(".description").val();
  // localStorage.setItem("myEvent",JSON.stringify(myEvent));  // we just overwrite the existing data
  console.log(myEvent);
  var myHour = $(this).parent().attr('id');
  console.log(myHour);
  let pullEvent = JSON.parse(localStorage.getItem("myEvent"));

  console.log(pullEvent);

  var temp = {
    hour: myHour,
    event: myEvent
  }

  // Add our new data to our dataset
  pullEvent.push(temp);
  console.log(pullEvent);
  let JSONevents = JSON.stringify(pullEvent);
  localStorage.setItem("myEvent", JSON.stringify(pullEvent));
  localStorage.setItem(myHour, JSON.stringify(myEvent));

  // var currentHour = TARGET CURRENT ID HOUR;

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // make a variable using dayjs to determine 24 hour time
  // if userInput === id-currenthour) {
  //  code to designate as presemt
  //} else if (userInput < id-currenthour) {
  // code to designate as past
  //}
  // else {
  // code to designate as future
  //}
  //};

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

});