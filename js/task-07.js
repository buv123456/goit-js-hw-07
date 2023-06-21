const inputRangeEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');
inputRangeEl.addEventListener('input', changeFontSize);

function changeFontSize() {
    spanEl.style.fontSize = inputRangeEl.value + 'px';
}