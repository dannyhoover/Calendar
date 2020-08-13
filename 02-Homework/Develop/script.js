// rows for hours in the day
var hourRowDisplay = document.querySelector("#target-row");


// events in the calendar
var eventList = [];

var eventItem = document.getElementById("target-row");
eventItem.textContent = eventList[0];

// pull current date and put on the screen
var date = new Date();
let dateDisplay = document.querySelector("#currentDay");
function displayDate() {
    dateDisplay.textContent = date;
}
displayDate();

// notation of current hour on calendar
var hourSet = date.getHours();

// save button
let saveBtn = document.querySelector("#target-save");
$(document).ready(function () {
    $("#target-save").on("click", function () {
        saveEvent();
    });
});

function saveEvent() {
    let eventText = localStorage.getItem("eventText")
    if (eventText===null) {
        eventText = "";
    } else {
        eventText = JSON.parse(eventText);
    }
    eventText.push({
        event: eventText
    });
    eventText = JSON.stringify(eventText);
    localStorage.setItem("eventText", eventText);
}

