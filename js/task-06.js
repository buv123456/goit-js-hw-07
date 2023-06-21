const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkSymbols);

function checkSymbols() {
    if (inputEl.value.trim().length == inputEl.dataset.length) {
        addRemove('invalid', 'valid');
        return;
    }
    addRemove('valid', 'invalid');
};

function addRemove(prevCl, newCl) {
    inputEl.classList.remove(prevCl);
    inputEl.classList.add(newCl);
}