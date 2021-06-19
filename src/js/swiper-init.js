// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

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
// callbackfn: (value: { preview: string; original: string; description: string; }, index: number, array: { preview: string; original: string; description: string; }[]) => any, thisArg?: any): any[]
swiperWrapper.insertAdjacentHTML('beforeend', swiperItemsMarkup);

export const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
