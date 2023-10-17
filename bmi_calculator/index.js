const ageInput = document.getElementById("age");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const calculateButton = document.getElementById("calculatorButton");
const clearButton = document.getElementById("clearButton");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");

//  Event listner for calculate button
calculateButton.addEventListener("click", calculateBMI);

// Event listner for clear button
clearButton.addEventListener("click", clearFields);

// function to calculate BMI
function calculateBMI() {
  const age = parseFloat(ageInput.value);
  const gender = maleRadio.checked ? "male" : "female";
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  const heightInMeter = height / 100;
  const bmi = (weight / heightInMeter ** 2).toFixed(2);

  bmiValue.textContent = bmi;

  const category = getBMICategory(bmi, gender, age);
  bmiCategory.textContent = category;
}

// function to clear all values
function clearFields() {
  ageInput.value = "";
  weightInput.value = "";
  heightInput.value = "";
  maleRadio.checked = false;
  femaleRadio.checked = false;
  bmiValue.textContent = "";
  bmiCategory.textContent = "";
}

// function to determine the bmi category
function getBMICategory(bmi, gender, age) {
  if (isNaN(bmi)) {
    return "Invalid";
  }

  if (gender === "male") {
    if (age < 18.5) {
      return "Underweight";
    } else if (age >= 18.5 && age < 24.9) {
      return "Normal Weight";
    } else if (age >= 25 && age < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (gender === "female") {
    if (age < 17.5) {
      return "Underweight";
    } else if (age >= 17.5 && age < 23.9) {
      return "Normal Weight";
    } else if (age >= 24 && age < 28.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
}
