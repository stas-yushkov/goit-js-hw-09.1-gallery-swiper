import Swiper from 'swiper';

import { galleryItems } from './app';

const swiperWrapper = document.querySelector('.swiper-wrapper');

const swiperItemsMarkup = galleryItems
  .map(({ original, description }, index) => {
    //
    return `
    <div class="swiper-slide">
      <img class="lightbox__image" src="${original}" alt="${description}" data-index="${index}" />
    </div>
`;
  })
  .join('');
swiperWrapper.insertAdjacentHTML('beforeend', swiperItemsMarkup);

export const swiper = new Swiper('.swiper-container', {
  loop: true,
});
