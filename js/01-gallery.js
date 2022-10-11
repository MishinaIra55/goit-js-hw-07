import { galleryItems } from './gallery-items.js';

const ref = document.querySelector('.gallery');

const PictureMarkup = createPictureMarkup(galleryItems);
ref.insertAdjacentHTML('beforeend', PictureMarkup);

function createPictureMarkup(items) {
   return items.map(({preview, original, description}) => {
      return `
   <div class="gallery__item">
      <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>
      `
   }).join('');
}

console.log(galleryItems);
