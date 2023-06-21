const counterValueEl = document.querySelector('#value');
let counterValue = 0;

const btnIncrementEl = document.querySelector('[data-action = "increment"]');
const btnDecrementEl = document.querySelector('[data-action = "decrement"]');

btnIncrementEl.addEventListener('click', onIncrement);
btnDecrementEl.addEventListener('click', onDecrement);

function onIncrement() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
};

function onDecrement() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
};

