// Selecting DOM elements
const lengthRange = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const includeNumbers = document.getElementById("includeNumbers");
const includeSpecialChars = document.getElementById("includeSpecialChars");
const generateButton = document.getElementById("generate");
const resetButton = document.getElementById("reset");
const passwordDisplay = document.getElementById("password");
const copyButton = document.getElementById("copy");

// Event listener for the password length range input
lengthRange.addEventListener("input", () => {
  lengthValue.textContent = lengthRange.value;
});

// Event listener for the Reset button
resetButton.addEventListener("click", () => {
  // Reset all options and password display
  lengthRange.value = 12; // Set to the default value
  lengthValue.textContent = 12;
  includeNumbers.checked = false;
  includeSpecialChars.checked = false;
  passwordDisplay.value = "";
});

// Event listener for the Generate Password button
generateButton.addEventListener("click", () => {
  // Add your password generation logic here
  const passwordLength = parseInt(lengthRange.value);
  const numbersChecked = includeNumbers.checked;
  const specialCharsChecked = includeSpecialChars.checked;

  const generatedPassword = generatePassword(
    passwordLength,
    numbersChecked,
    specialCharsChecked
  );
  passwordDisplay.value = generatedPassword;
});

// Event listener for the Copy to Clipboard button
copyButton.addEventListener("click", () => {
  // Add your copy to clipboard logic here
  const generatedPassword = passwordDisplay.value;
  if (generatedPassword) {
    copyToClipboard(generatedPassword);
  }
});

// Function to generate a random password
function generatePassword(length, useNumbers, useSpecialChars) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%&*_+:.";

  let validChars = uppercaseChars + lowercaseChars;
  if (useNumbers) {
    validChars += numberChars;
  }
  if (useSpecialChars) {
    validChars += specialChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }

  return password;
}

// Function to copy text to the clipboard
function copyToClipboard(text) {
  if (!navigator.clipboard) {
    // Clipboard API not supported, fallback to old method
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    passwordDisplay.select();
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Successful copy
      passwordDisplay.select();
    })
    .catch((error) => {
      console.error("Clipboard write error:", error);
      // Fallback to old method if clipboard write fails
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      passwordDisplay.select();
    });
}
