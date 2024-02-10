import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const imageMarkup = makeGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imageMarkup);

function makeGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
