import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryNode=document.querySelector(".gallery")
const linkNode = document.querySelector(".gallery a")

let galleryListEl = galleryItems.map(item =>
`<div class="gallery__item">
<a class="gallery__link" href='${item.original}''>
  <img
    class="gallery__image"
    src='${item.preview}'
    data-source='${item.original}'
    alt='${item.description}'
  />
</a>
</div>`
).join("");

galleryNode.insertAdjacentHTML("beforeend", galleryListEl)
let instance;

galleryNode.addEventListener("click", e => {
  if (e.target.tagName !== "IMG") { return false };

  e.preventDefault();
  // 1 method
  let linkImg = e.target.dataset.source;
  instance = basicLightbox.create(`<img
    src='${linkImg}'
    data-source='https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg'
  />`)
  
  // 2 method
  // let img = e.target;
  // img.src = linkImg
  // const instance = basicLightbox.create(img.outerHTML)
  
  instance.show()
  const handler = e => {
    if (e.key === "Escape") {
      onClose: (instance) => { document.removeEventListener("keydown", handler) };
      instance.close();
    }
  }
  document.addEventListener("keydown", handler);
  // document.removeEventListener("keydown", handler)

})

