// global variables
var currentTime = moment();
var entryCount = 1;
// display time on top of page
$("#currentDay").text(currentTime.format("HH:mm MMMM Do, YYYY"));

// get local storage
var retrieveStorage = function () {
  $("#textblock1").val(localStorage.getItem("textblock1"));
  $("#textblock2").val(localStorage.getItem("textblock2"));
  $("#textblock3").val(localStorage.getItem("textblock3"));
  $("#textblock4").val(localStorage.getItem("textblock4"));
  $("#textblock5").val(localStorage.getItem("textblock5"));
  $("#textblock6").val(localStorage.getItem("textblock6"));
  $("#textblock7").val(localStorage.getItem("textblock7"));
  $("#textblock8").val(localStorage.getItem("textblock8"));
  $("#textblock9").val(localStorage.getItem("textblock9"));
  $("#textblock10").val(localStorage.getItem("textblock10"));
};
retrieveStorage();
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
$("button").click(function createTasks() {
  var task = $(this).siblings("textarea").val();
  var timeBlock = $(this).siblings("textarea").attr("id");
  localStorage.setItem(task, timeBlock);
});
