import { galleryItems } from './gallery-items.js';
// Change code below this line

const listEl = document.querySelector('.gallery');
listEl.insertAdjacentHTML('afterbegin', addImg(galleryItems))
let instance = '';

function addImg(arr) {
    return arr.map(({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
    ).join('')
}

listEl.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) return;
    const objImg = galleryItems.find(({ preview } = {}) => preview === event.target.src);
    instance = basicLightbox.create(makeImgMarkup(objImg));
    instance.show(window.addEventListener('keydown', closeMarkup));
}

function makeImgMarkup({ original, description }) {
    return `
    <img
      src="${original}"
      alt="${description}"
    />`
}

function closeMarkup(event) {
    if (event.code === "Escape") instance.close(window.removeEventListener('keydown', closeMarkup));
}

