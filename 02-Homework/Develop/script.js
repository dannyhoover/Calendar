const startTime = 8;
const endTime = 17;

const currentHour = moment().format("H");

const dateDisplay = document.querySelector("#currentDay");
const displayContainer = document.querySelector(".container");

dateDisplay.textContent = moment().format("dddd, MMMM Do");

for (let hour = startTime; hour <= endTime; hour++) {
    let div = document.createElement("div");
    div.className = "row time-block";
    let hourDisplay = document.createElement("div");
    hourDisplay.className = "hour";
    hourDisplay.textContent = `${hour % 12 || 12}:00 ${hour > 11 ? "PM" : "AM"}`;
    let eventDisplay = document.createElement("textarea");
    eventDisplay.className = `description ${hour < currentHour ? "past" : hour > currentHour ? "future" : "present"}`;
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
