import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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

// ----------------------------------------------------
listEl.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) return;
    const objImg = findImgObj(event.target.src)
    instance = basicLightbox.create(makeImgMarkup(objImg), {
        closable: false
    })
    instance.show();
    window.addEventListener('keydown', closeMarkup);
}

function findImgObj(imgTarget) {
    return galleryItems.find(({ preview } = {}) => preview === imgTarget)
}

function makeImgMarkup({ original }) {
    return `
    <img
      class="gallery__image"
      src="${original}"
      alt="Image description"
    />`
}

function closeMarkup(event) {
    if (event.code !== "Escape") return;
    instance.close();
    window.removeEventListener('keydown', closeMarkup);
}

