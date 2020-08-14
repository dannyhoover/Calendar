# Calendar

This is a simple calendar app to help schedule the users day. It utilizes third-party APIs and jQuery to help the user save dynamically created events for each hour of the day in the browser. I utilized JQUERY to manipulate the html file with my javascript. This helps the program adjust if more hours in the day are wanted.

This is what the page looks like.

![day planner demo 1](./Assets/calendar.img3.jpg)

Past events are grayed out depending on the time the page is viewed. The current event is highlighted red, and future events are green.
The user can input their own events that will be saved even after the page is refreshed.

![day planner demo 2](./Assets/calendar.img2.jpg)

The time is pulled whenever the page is opened. 

Assignment details below:

...

## 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

### User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
