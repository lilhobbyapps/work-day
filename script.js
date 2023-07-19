$(function() {
var today = dayjs().format("dddd[,] MMMM D[,] YYYY");
var currentHour = dayjs().format("h");
$("#currentDay").html(today);
var i = 1;
while (i<14) { 
  var timeBlock = $("#hour-" + i); 
  if (currentHour >= 6 && currentHour < 9){
    timeBlock.addClass("future");
  } else {
    if (i < currentHour) {
      if((currentHour >= 9) && (i < 6)){
        timeBlock.addClass("future");
      } else {
        timeBlock.addClass("past");
      }
    } else if (i > currentHour) {
      if(i < 6) {
        timeBlock.addClass("future");
      } else if (currentHour >= 9) {
        timeBlock.addClass("future");
      } else {
        timeBlock.addClass("past");
      }
    } else if (i === currentHour) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }
  }
  ++i;
}
//   TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
$(".saveBtn").on( "click", function( ) {
  alert("saved!");
  });
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
});
