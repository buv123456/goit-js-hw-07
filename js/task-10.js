function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inpEl: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}


function createBoxes(amount) {
  if (!amount) return;
  let str = "";
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor();
    size += 10;
    str += `<div style="height: ${size}px; width: ${size}px; background-color: ${color};" ></div>`;
  }
  refs.boxesEl.innerHTML = str;
}

refs.btnCreate.addEventListener('click', () => createBoxes(Number(refs.inpEl.value)));

refs.btnDestroy.addEventListener('click', () => { refs.boxesEl.innerHTML = ''; refs.inpEl.value = '' })