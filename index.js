const currentDate = new Date();

const year = currentDate.getFullYear(); 
const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
const day = currentDate.getDate();


function addDate() {
        var dayInput = document.getElementById("day");
        var monthInput = document.getElementById("month");
        var yearInput = document.getElementById("year");
        dayInput.textContent  = day;
        monthInput.textContent  = month;
        yearInput.textContent  = year;
        }
     window.onload = addDate();

