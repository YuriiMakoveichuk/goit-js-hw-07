function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divElem = document.querySelector("#boxes");
console.log(divElem);

function createBoxes(amount) {
  let num = 30;
  for (let i = 0; i < amount; i++) {
    num += 10;
    function divTemplate() {
      return `<div style="width:${num}px;height:${num}px;background-color:${getRandomHexColor()}; margin:20px"></div>`;
    }
    divElem.insertAdjacentHTML("beforeend", divTemplate());
  }
}
createBtn.addEventListener("click", handleCreateBoxes);
function handleCreateBoxes() {
  divElem.innerHTML = "";
  if (inputElem.value >= 1 && inputElem.value <= 100) {
    const amount = inputElem.value;
    createBoxes(amount);
  }
  inputElem.value = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  divElem.innerHTML = "";
}
