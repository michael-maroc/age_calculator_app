// Labels
const dayLabel = document.getElementById('dayLabel');
const monthLabel = document.getElementById('monthLabel');
const yearLabel = document.getElementById('yearLabel');

// Inputs
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');

// Button
const btn = document.querySelector('.btn');

// Calculated values
const yearsValue = document.getElementById('yearsValue');
const monthsValue = document.getElementById('monthsValue');
const daysValue = document.getElementById('daysValue');

// Dates
const today = new Date();
const dayNow = today.getUTCDate();
const monthNow = today.getUTCMonth() +1;
const yearNow = today.getFullYear();

// Array of days numbers in each month
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

btn.addEventListener('click', function(){
  let year = yearNow - yearInput.value;
  let month = monthNow - monthInput.value;
  let day = months[monthInput.value -1] - dayInput.value

  if(month < 0) {
    month = month + 12;
    year--;
  }

  daysValue.textContent = day;
  monthsValue.textContent = month;
  yearsValue.textContent = year;
});
