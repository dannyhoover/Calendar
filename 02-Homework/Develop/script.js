// rows for hours in the day
var hourRowDisplay = document.querySelector("#target-row");

var hoursList = [];

// pull current date and put on the screen
var date = new Date();
let dateDisplay = document.querySelector("#currentDay");
function displayDate() {
    dateDisplay.textContent = date;
}
displayDate();

// notation of current hour on calendar
var hourBar = date.getHours();

