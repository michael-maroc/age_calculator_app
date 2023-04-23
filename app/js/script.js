// Error functions
function handleError(label, input, errMsg, errMsgValue){
  return (
    label.style.color = lightred,
    input.style.borderColor = lightred,
    errMsg.textContent = errMsgValue
  )
}

function errReset(label, input, errMsg){
  return (
    label.style.color = smokeGrey,
    input.style.borderColor = lightgray,
    errMsg.textContent = ''
  )
}

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

// Computed values
let yearsValue = document.getElementById('yearsValue');
let monthsValue = document.getElementById('monthsValue');
let daysValue = document.getElementById('daysValue');

// Error messages
const dayErrMsg = document.querySelector('.dayErrMsg');
const monthErrMsg = document.querySelector('.monthErrMsg');
const yearErrMsg = document.querySelector('.yearErrMsg');

// Button
const btn = document.querySelector('.btn');

// Colors
let lightred = "#ff5757";
let smokeGrey = "#716f6f";
let lightgray = "#dbdbdb";

btn.addEventListener('click', function(e){
  e.preventDefault();

  const today = new Date();
  let dayNow = today.getDate();
  let monthNow = today.getMonth() +1;
  let yearNow = today.getFullYear();

  const monthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let dayIsValid = false;
  let monthIsValid = false;
  let yearIsValid = false;
  let dateIsValid = false;

  // Day Validation
  if (!dayInput.value){
    handleError(dayLabel, dayInput, dayErrMsg, 'This field is required')
    dayIsValid = false
  } else if (dayInput.value == false || dayInput.value < 1) {
    handleError(dayLabel, dayInput, dayErrMsg, 'Must be a valid day')
    dayIsValid = false
  } else {
    errReset(dayLabel, dayInput, dayErrMsg)
    dayIsValid = true
  }

  // Month Validation
  if (!monthInput.value){
    handleError(monthLabel, monthInput, monthErrMsg, 'This field is required')
    monthIsValid = false
  } else if (monthInput.value < 1 || monthInput.value > 12) {
    handleError(monthLabel, monthInput, monthErrMsg, 'Must be a valid month')
    monthIsValid = false
  } else {
    errReset(monthLabel, monthInput, monthErrMsg)
    monthIsValid = true
  }

  // Year validation
  if (!yearInput.value){
    handleError(yearLabel, yearInput, yearErrMsg, 'This field is required')
    yearIsValid = false
  } else if (yearInput.value == false || yearInput.value > yearNow) {
    handleError(yearLabel, yearInput, yearErrMsg, 'Must be in the past')
    yearIsValid = false
  } else {
    errReset(yearLabel, yearInput, yearErrMsg)
    yearIsValid = true
  }

  // Full date validation
  if (dayInput.value > monthsArr[monthInput.value -1] ||
      yearInput.value == yearNow && monthInput.value > monthNow ||
      yearInput.value == yearNow && dayInput.value > dayNow) {
    dateIsValid = false;
  } else {
    dateIsValid = true;
  }

  if (dayIsValid && monthIsValid && yearIsValid && !dateIsValid) {
    return (
      handleError(dayLabel, dayInput, dayErrMsg, 'Must be a valid date'),
      handleError(monthLabel, monthInput, monthErrMsg),
      handleError(yearLabel, yearInput, yearErrMsg),
      dateIsValid = false
    )
  }

  if (dayIsValid && monthIsValid && yearIsValid && dateIsValid) {
    if (dayInput.value > dayNow) {
      dayNow = dayNow + monthsArr[monthNow -1];
      monthNow = monthNow -1;
    }
  
    if (monthInput.value > monthNow) {
      monthNow = monthNow + 12;
      yearNow = yearNow -1;
    }
  
    let d = dayNow - dayInput.value;
    let m = monthNow - monthInput.value;
    let y = yearNow - yearInput.value;
  
    daysValue.textContent = d;
    monthsValue.textContent = m;
    yearsValue.textContent = y;
  
    form.reset();
  }
});
