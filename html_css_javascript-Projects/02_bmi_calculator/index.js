document.addEventListener("DOMContentLoaded", function () {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const bmiBtn = document.getElementById("bmi_btn");
  const result = document.getElementById("result");

  bmiBtn.addEventListener("click", function () {
    calculateBMI(weightInput.value, heightInput.value);
  });
});
