// calendar start and end times for the day
const startTime = 9;
const endTime = 17;

// current time
const currentHour = moment().format("H");

// display the current day
const dateDisplay = document.querySelector("#currentDay");
const displayContainer = document.querySelector(".container");
dateDisplay.textContent = moment().format("dddd, MMMM Do");

// dynamically created hour rows for events and hour labels with save buttons for each
for (let hour = startTime; hour <= endTime; hour++) {
    let div = document.createElement("div");
    div.className = "row time-block";
    let hourDisplay = document.createElement("div");
    hourDisplay.className = "hour";
    hourDisplay.textContent = `${hour % 12 || 12} ${hour > 11 ? "PM" : "AM"}`;
    let eventDisplay = document.createElement("textarea");
    eventDisplay.className = `col-md-10 ${hour < currentHour ? "past" : hour > currentHour ? "future" : "present"}`;
    eventDisplay.value = localStorage.getItem(hour) || ""; 
    let saveButton = document.createElement("button");
    saveButton.className = "saveBtn";
    saveButton.innerHTML = '<i class="far fa-save"/>'
    saveButton.addEventListener("click", function() {
        localStorage.setItem(hour, eventDisplay.value);
    })
    div.append(hourDisplay, eventDisplay, saveButton);
    displayContainer.append(div);
}
