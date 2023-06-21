const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', whenInput);

function whenInput() {

    spanEl.textContent = (!inputEl.value.trim()) ? 'Anonymous' : inputEl.value;

}