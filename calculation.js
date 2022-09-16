const principalBox = document.querySelector("#principal");
const IrateBox = document.querySelector("#Irate");
const numTimesBox = document.querySelector("#numCompounded");
const totalYearsBox = document.querySelector("#totalYears");
const answerSpan1 = document.querySelector("#total");
const answerSpan2 = document.querySelector("#totalEarned");

principalBox.addEventListener("input", calculateCI);
IrateBox.addEventListener("input", calculateCI);
numTimesBox.addEventListener("input", calculateCI);
totalYearsBox.addEventListener("input", calculateCI);

function calculateCI() {
  const principal = Number(principalBox.value);
  const Irate = Number(IrateBox.value);
  const numTimes = Number(numTimesBox.value);
  const totalYears = Number(totalYearsBox.value);
  const answer1 = principal * (1 + Irate / numTimes) ** totalYears;
  const answer2 = answer1 - principal;
  answerSpan1.textContent = answer1.toFixed(2);
  answerSpan2.textContent = answer2.toFixed(2);
}
