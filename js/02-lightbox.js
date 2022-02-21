import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
                </a>
            </li>`;
  })
  .join("");
galleryRef.innerHTML = galleryMarkup;
console.log(galleryItems);

const lbGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
