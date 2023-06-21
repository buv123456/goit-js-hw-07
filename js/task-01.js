const listItemsEl = document.querySelectorAll('.item ul');
console.log('Number of categories: ' + listItemsEl.length);
listItemsEl.forEach((item) => {
    console.log('Category: ' + item.previousElementSibling.textContent);
    console.log('Elements: ' + item.children.length);
})
