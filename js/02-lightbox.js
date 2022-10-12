import { galleryItems } from "./gallery-items.js";

const ref = document.querySelector(".gallery");

const PictureMarkup = createPictureMarkup(galleryItems);
ref.insertAdjacentHTML("beforeend", PictureMarkup);

function createPictureMarkup(items) {
   return items
   .map(({ preview, original, description }) => {
      return ` 
      <a class="gallery__item" href="${original}">
         <img class="gallery__image" 
         src="${preview}" 
         alt="${description}" />
      </a>`;
   })
   .join("");
}

console.log(galleryItems);
