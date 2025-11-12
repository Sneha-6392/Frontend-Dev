const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

function updateCounter() {
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = "#38ef7d";
  } else if (count < 0) {
    counter.style.color = "#ff5252";
  } else {
    counter.style.color = "#11998e";
  }
}
