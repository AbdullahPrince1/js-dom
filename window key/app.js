const h1 = document.querySelector("h1");

window.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    h1.textContent = "SPACE";
  } else {
    h1.textContent = event.key;
  }
});
