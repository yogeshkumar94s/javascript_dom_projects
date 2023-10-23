const cityInput = document.getElementById("cityInput");
const getWeatherButton = document.getElementById("getWeather");
const weatherInfo = document.getElementById("weatherInfo");
const cityNameElement = document.getElementById("cityName");
const temperatureElement = document.getElementById("temperature");
const weatherConditionElement = document.getElementById("weatherCondition");

const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    return;
  }

  fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      cityNameElement.textContent = data.name;
      temperatureElement.textContent = data.main.temp;
      weatherConditionElement.textContent = data.weather[0].description;
      weatherInfo.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
