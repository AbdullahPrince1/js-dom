const sad = document.querySelector(".sad");
const natural = document.querySelector(".natural");
const happy = document.querySelector(".happy");
const feedback = document.querySelector(".feedback");
const btn = document.querySelector("button");
const main = document.querySelector(".main");

sad.addEventListener("click", function () {
  function show() {
    main.style.display = "none";
    feedback.style.display = "block";
    btn.removeEventListener("click", show);
  }
  btn.addEventListener("click", show);
});
happy.addEventListener("click", function () {
  function show() {
    main.style.display = "none";
    feedback.style.display = "block";
    btn.removeEventListener("click", show);
  }
  btn.addEventListener("click", show);
});
// natural.addEventListener("click", function () {
//   function show() {
//     main.style.display = "none";
//     feedback.style.display = "block";
//     btn.removeEventListener("click", show);
//   }
//   btn.addEventListener("click", show);
// });
