import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`;
    })
    .join("");
}

const modalWin = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
