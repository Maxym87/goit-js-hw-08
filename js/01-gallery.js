import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const imageMarkup = makeGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imageMarkup);

gallery.addEventListener("click", onGalleryClick);

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

function onGalleryClick(evt) {
  evt.preventDefault();

  const isGalleryImageEl = evt.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }

  const imgSelected = evt.target.getAttribute("data-source");

  const instance = basicLightbox.create(`<img src="${imgSelected}" width="800" height="600">`);

  instance.show();
}
