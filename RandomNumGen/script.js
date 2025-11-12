const number = document.getElementById("number");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  number.textContent = randomNum;
});
