import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  const isGalleryContainerEl = evt.target.classList.contains("gallery__image");

  if (!isGalleryContainerEl) {
    return;
  }
  const selectedImage = evt.target.dataset.source;
  openModal(selectedImage);
}

function openModal(selectedImage) {
  const modalForm = basicLightbox.create(`
    <img src="${selectedImage} class = "modal">
`);
  modalForm.show();
}
