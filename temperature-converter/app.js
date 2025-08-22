const celsius = document.querySelector("#c");
const fahrenheit = document.querySelector("#f");
const convert1 = document.querySelector("#btn1");
const convert2 = document.querySelector("#btn2");

convert1.addEventListener("click", () => {
  const result = (celsius.value * 9) / 5 + 32;
  fahrenheit.value = result;
});
convert2.addEventListener("click", () => {
  const result = (fahrenheit.value - 32) / 9;
  celsius.value = result;
});
