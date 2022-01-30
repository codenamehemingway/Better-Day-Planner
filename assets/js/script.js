// global variables
var currentTime = moment();
var entryCount = 1;
// display time on top of page
$("#currentDay").text(currentTime.format("HH:mm MMMM Do, YYYY"));

// get local storage

// color coding past/present/future in mil time to avoid numerical ascension issues
for (i = 8; i < 18; i++) {
  var hour = currentTime.hour();
  var tBlock = "#textblock" + entryCount;
  if (i < hour) {
    $(tBlock).addClass("past");
  } else if (i > hour) {
    $(tBlock).addClass("future");
  } else {
    $(tBlock).addClass("present");
  }
  entryCount++;
}
// save to storage function
