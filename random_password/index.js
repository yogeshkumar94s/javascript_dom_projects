function generateRandomPassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

const generatePasswordButton = document.getElementById("generatePassword");
const passwordDisplay = document.getElementById("passwordDisplay");

generatePasswordButton.addEventListener("click", () => {
  const passwordLength = 12; // Change this to your desired password length
  const newPassword = generateRandomPassword(passwordLength);
  passwordDisplay.textContent = newPassword;
  passwordDisplay.classList.remove("hidden");
});
