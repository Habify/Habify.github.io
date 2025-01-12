const currentDate = new Date();

const year = currentDate.getFullYear(); 
const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
const day = currentDate.getDate();


window.onload = addDate();
window.onload = addDay();


function addDate() {
        var dayInput = document.getElementById("day");
        var monthInput = document.getElementById("month");
        var yearInput = document.getElementById("year");
        dayInput.textContent  = day;
        monthInput.textContent  = month;
        yearInput.textContent  = year;
        }


function addDay() {
// Get the current value from local storage
let currentValue = localStorage.getItem("streakCount");
let dailyStreakOutput = document.getElementById("dailyStreakOutput");

// Check if the value exists and is a number
if (currentValue && !isNaN(currentValue)) {
  // Convert the value to a number and increment it
  currentValue = parseInt(currentValue) + 1;
} else {
  // Initialize the value to 1 if it doesn't exist or is not a number
  currentValue = 1;
}

// Store the updated value back in local storage
  localStorage.setItem("streakCount", currentValue);  
  dailyStreakOutput.innerHTML= currentValue;
}

function clearStreak() {
// Get the current value from local storage
let currentValue = localStorage.getItem("streakCount");
let dailyStreakOutput = document.getElementById("dailyStreakOutput");

// Check if the value exists and is a number
if (currentValue && !isNaN(currentValue)) {
  // Convert the value to a number and increment it
  currentValue = 0;
} else {
  // Initialize the value to 1 if it doesn't exist or is not a number
  currentValue = 0;
}

// Store the updated value back in local storage
  localStorage.setItem("streakCount", currentValue);  
  dailyStreakOutput.innerHTML= currentValue;
}

function subtractDay() {
// Get the current value from local storage
let currentValue = localStorage.getItem("streakCount");
let dailyStreakOutput = document.getElementById("dailyStreakOutput");

// Check if the value exists and is a number
if (currentValue && !isNaN(currentValue)) {
  // Convert the value to a number and increment it
  currentValue = parseInt(currentValue) - 1;
} else {
  // Initialize the value to 1 if it doesn't exist or is not a number
  currentValue = 1;
}

// Store the updated value back in local storage
  localStorage.setItem("streakCount", currentValue);  
  dailyStreakOutput.innerHTML= currentValue;
 }
