import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryNode=document.querySelector(".gallery")
const linkNode = document.querySelector(".gallery a")

let galleryListEl = galleryItems.map(item =>
`<a class="gallery__item" href='${item.original}''>
  <img
    class="gallery__image"
    src='${item.preview}'
    alt='${item.description}'
  />
</a>`
).join("");

galleryNode.insertAdjacentHTML("beforeend", galleryListEl)

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

