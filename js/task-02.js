const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const itemsEl = ingredients.map(item => {
  let liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = item;
  return liEl;
});
listEl.append(...itemsEl)