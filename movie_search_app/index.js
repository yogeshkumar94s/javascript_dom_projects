const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const movieInfo = document.getElementById("movieInfo");
const movieTitle = document.getElementById("movieTitle");
const moviePoster = document.getElementById("moviePoster");
const moviePlot = document.getElementById("moviePlot");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;

  if (searchTerm.trim() !== "") {
    fetchMovieData(searchTerm);
  }
});

function fetchMovieData(title) {
  const apiKey = "YOUR_OMDB_API_KEY";
  const apiUrl = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        movieTitle.textContent = data.Title;
        moviePoster.src = data.Poster;
        moviePlot.textContent = data.Plot;
        movieInfo.classList.remove("hidden");
      } else {
        alert("Movie not found!");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
