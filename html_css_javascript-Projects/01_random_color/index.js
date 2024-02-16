const body = document.querySelector("body");
const button = document.querySelectorAll(".circle");

button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
