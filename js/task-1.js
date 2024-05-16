const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${items.length}`);
const titles = document.querySelectorAll(".item").forEach((title) => {
  console.log(`Category: ${title.firstElementChild.textContent}`);
  console.log(`Elements: ${title.lastElementChild.children.length}`);
});
