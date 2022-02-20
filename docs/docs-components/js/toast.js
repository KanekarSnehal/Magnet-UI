const btnAction = document.querySelectorAll(".btn-action");
const wrongBtn = document.querySelectorAll(".wrong-btn");
const baseline = document.querySelector(".baseline");
const leading = document.querySelector(".leading");
const stacked = document.querySelector(".stacked");
const toast = document.querySelector(".toast");
btnAction.forEach((btns) => {
  btns.addEventListener("click", () => {
    if (btns.innerText === "Baseline") {
      baseline.style.display = "flex";
    } else if (btns.innerText === "Leading") {
      leading.style.display = "flex";
    } else if (btns.innerText === "Stacked") {
      stacked.style.display = "flex";
    }
  });
});

wrongBtn.forEach((wrong) => {
  wrong.addEventListener("click", () => {
    leading.style.display = "none";
    baseline.style.display = "none";
    stacked.style.display = "none";
  });
});
