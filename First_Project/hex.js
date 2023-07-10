const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const text = document.querySelector(".color");

button.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getrendomNumber()];
  }

  document.body.style.background = hexColor;
  text.textContent = hexColor;
});

function getrendomNumber() {
  return Math.floor(Math.random() * hex.length);
}
