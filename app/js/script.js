// Form
const form = document.getElementById("form");

// Labels
const dayLabel = document.getElementById('dayLabel');
const monthLabel = document.getElementById('monthLabel');
const yearLabel = document.getElementById('yearLabel');

// Inputs
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');

// Calculated values
let yearsValue = document.getElementById('yearsValue');
let monthsValue = document.getElementById('monthsValue');
let daysValue = document.getElementById('daysValue');

// Error messages
const allErrMsg = document.querySelectorAll('.error-msg');
const dayErrMsg = document.querySelector('.dayErrMsg');
const monthErrMsg = document.querySelector('.monthErrMsg');
const yearErrMsg = document.querySelector('.yearErrMsg');

// Button
const btn = document.querySelector('.btn');

// Dates
const today = new Date();
let dayNow = today.getUTCDate();
let monthNow = today.getUTCMonth() +1;
let yearNow = today.getFullYear();

// Array of numbers of days for each month
const monthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

btn.addEventListener('click', function(e){
  e.preventDefault();

  if (dayInput.value > dayNow) {
    dayNow = dayNow + monthsArr[monthNow -1];
    monthNow--;
  }

  if (monthInput.value > monthNow) {
    monthNow = monthNow + 12;
    yearNow--;
  }

  let d = dayNow - dayInput.value;
  let m = monthNow - monthInput.value;
  let y = yearNow - yearInput.value;

  daysValue.textContent = d;
  monthsValue.textContent = m;
  yearsValue.textContent = y;

  form.reset();
});
