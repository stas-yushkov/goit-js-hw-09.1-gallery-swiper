import './sass/main.scss';

import { galleryItems } from './js/app';
// console.dir(data.galleryItems);
import { galleryItemsMarkup } from './js/gallery-items-markup';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import { swiper } from './js/swiper-init';

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightbox__imageRef = document.querySelector('.lightbox__image');
// console.log('🚀 ~ lightbox__imageRef', lightbox__imageRef);
const closeLightboxBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);
let currentImageIndex = 0;

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  // console.log(e.currentTarget);
  // console.log(e.target.dataset.index);
  // const originalImgSrc = e.target.dataset.source;
  // console.log(originalImgSrc);
  currentImageIndex = Number(e.target.dataset.index);

  // Открытие модального окна по клику на элементе галереи.
  lightboxRef.classList.add('is-open');

  // // Подмена значения атрибута src элемента img.lightbox__image.
  // lightbox__imageRef.src = originalImgSrc;

  lightboxRef.addEventListener('click', onlightboxRefClick);
  window.addEventListener('keydown', onEscBtnKeydown);

  window.addEventListener('keydown', onArrowBtnKeydown);

  // console.log(swiper.activeIndex);
  // swiper.activeIndex = currentImageIndex;
  // console.log(swiper.activeIndex);
  swiper.slideTo(currentImageIndex + 1, 0, false);
  // console.log(swiper.activeIndex);
}

function onlightboxRefClick(e) {
  // Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
  const isCloseBtnClicked = e.target.dataset.action === 'close-lightbox';

  if (isCloseBtnClicked) {
    closeLightbox();
  }

  // Закрытие модального окна по клику на div.lightbox__overlay.
  const lightbox__overlayRef = document.querySelector('.lightbox__overlay');
  const isLightbox__overlayClicked = e.target === lightbox__overlayRef;

  if (isLightbox__overlayClicked) {
    closeLightbox();
  }
}

function closeLightbox() {
  lightboxRef.classList.remove('is-open');
  closeLightboxBtn.removeEventListener('click', onlightboxRefClick);
  window.removeEventListener('keydown', onEscBtnKeydown);
  window.removeEventListener('keydown', onArrowBtnKeydown);

  // Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
  lightbox__imageRef.src = '';

  currentImageIndex = 0;
}

function onEscBtnKeydown(e) {
  // Закрытие модального окна по нажатию клавиши ESC.
  const isEscBtnClicked = e.code === 'Escape';

  if (isEscBtnClicked) {
    closeLightbox();
  }
}

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

function onArrowBtnKeydown(e) {
  const isFlipLeft = e.code === 'ArrowLeft';
  const isFlipRight = e.code === 'ArrowRight';

  // currentImageIndex
  // console.log('🚀 ~ onArrowBtnKeydown ~ currentImageIndex', currentImageIndex);

  if (isFlipLeft) {
    swiper.slidePrev();
  }

  if (isFlipRight) {
    swiper.slideNext();
  }
  // const newOriginalImageSrc = galleryItems[currentImageIndex].original;
  // const newImageDescr = galleryItems[currentImageIndex].description;
  // lightbox__imageRef.src = newOriginalImageSrc;
  // lightbox__imageRef.alt = newImageDescr;
  // console.log('🚀 ~ onArrowBtnKeydown ~ currentImageIndex', currentImageIndex);
}
