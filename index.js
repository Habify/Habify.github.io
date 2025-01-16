

window.onload = addDay();



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

