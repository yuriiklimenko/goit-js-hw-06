const mainList = document.querySelector('#categories');
const subLists = document.querySelectorAll('.item');

const length = mainList.children.length;
console.log(`Number of categories: ${length}`);

for (const itemList of subLists) {
  const categoryName = itemList.firstElementChild.textContent;
  const categoryNub = itemList.lastElementChild.childElementCount;
  console.log(`Category: ${categoryName}\nElements: ${categoryNub}`);
}
