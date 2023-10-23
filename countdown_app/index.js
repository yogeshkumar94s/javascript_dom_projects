let interval;

document
  .getElementById("startButton")
  .addEventListener("click", startCountdown);
document
  .getElementById("resetButton")
  .addEventListener("click", resetCountdown);

function startCountdown() {
  clearInterval(interval); // Clear any previous interval to prevent multiple countdowns running simultaneously.

  const targetDate = new Date(
    document.getElementById("targetDate").value
  ).getTime();
  const countdown = document.getElementById("countdown");

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (timeRemaining <= 0) {
      clearInterval(interval);
    }
  }

  updateCountdown(); // Initial call to display the countdown immediately.

  interval = setInterval(updateCountdown, 1000);
}

function resetCountdown() {
  clearInterval(interval); // Stop the countdown.
  document.getElementById("days").textContent = "0";
  document.getElementById("hours").textContent = "0";
  document.getElementById("minutes").textContent = "0";
  document.getElementById("seconds").textContent = "0";
  document.getElementById("targetDate").value = ""; // Clear the input field.
}
