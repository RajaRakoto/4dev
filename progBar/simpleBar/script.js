function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

const target1 = document.querySelector(".target1");
const target2 = document.querySelector(".target2");

/* Example */
updateProgressBar(target1, 50);
updateProgressBar(target2, 90);