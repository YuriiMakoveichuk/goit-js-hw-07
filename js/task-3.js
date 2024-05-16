const inputElem = document.querySelector("#name-input");

const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (event) => {
  event.currentTarget.value.trim().length !== 0
    ? (spanElem.textContent = event.currentTarget.value.trim())
    : (spanElem.textContent = "Anonymous");
});
