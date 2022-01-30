// global variables
var currentTime = moment();
// display time on top of page
$("#currentDay").text(
  currentTime.format("dddd") + ", " + currentTime.format("MMM Do YYYY")
);

// get local storage

// color coding past/present/future

// save to storage function
