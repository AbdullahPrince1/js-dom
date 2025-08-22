const bill = document.querySelector("#bill");
const tip = document.querySelector("#percentage");
const calculate = document.querySelector("button");
const total = document.querySelector("span");

calculate.addEventListener("click", () => {
  const billAmount = bill.value;
  const tipAmmount = tip.value;
  const result = (billAmount * tipAmmount) / 100;
  total.textContent = `Total: ${result}`;
});
