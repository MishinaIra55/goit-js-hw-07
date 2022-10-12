import { galleryItems } from './gallery-items.js';
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
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
      </div>`
   }).join('');
}



ref.addEventListener('click', selectBigPicture);
// Реализация делегирования на div.gallery и получение url большого изображения.

function selectBigPicture(event) {
   event.preventDefault(event);//запретила скачивание фото
   
   const instance = basicLightbox.create(`
      <img src="${event.target.getAttribute('data-source')}" width="800" height="600">`
      );
   instance.show();

   ref.addEventListener('keydown', (event) => {
      if(event.code === 'Escape') {
         instance.close();
      }
      console.log(event.code);
   });
};




   


