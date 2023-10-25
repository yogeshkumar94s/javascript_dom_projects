let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");

const passBox = document.getElementById("passBox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const copyIcon = document.getElementById("copyIcon");

const genBtn = document.getElementById("genBtn");

sliderValue.innerText = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.innerText = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassord();
});

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const allNumbers = "0123456789";
const allSymbols = "@#$%&*";

function generatePassord() {
  let genPassword = "";
  allChars = "";

  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}

copyIcon.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied!";

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 2000);
  }
});
