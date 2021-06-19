import './sass/main.scss';
import { galleryItemsMarkup } from './js/gallery-items-markup';
import 'swiper/swiper-bundle.css';
import { swiper } from './js/swiper-init';

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const closeLightboxBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);
let currentImageIndex = 0;

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  currentImageIndex = Number(e.target.dataset.index);

  lightboxRef.classList.add('is-open');

  lightboxRef.addEventListener('click', onlightboxRefClick);
  window.addEventListener('keydown', onEscBtnKeydown);
  window.addEventListener('keydown', onArrowBtnKeydown);

  swiper.slideTo(currentImageIndex + 1, 0, false);
}

function onlightboxRefClick(e) {
  const lightbox__overlayRef = document.querySelector('.lightbox__overlay');

  const isCloseBtnClicked = e.target.dataset.action === 'close-lightbox';
  const isLightbox__overlayClicked = e.target === lightbox__overlayRef;

  if (isCloseBtnClicked) {
    closeLightbox();
  }

  if (isLightbox__overlayClicked) {
    closeLightbox();
  }
}

function closeLightbox() {
  lightboxRef.classList.remove('is-open');

  closeLightboxBtn.removeEventListener('click', onlightboxRefClick);
  window.removeEventListener('keydown', onEscBtnKeydown);
  window.removeEventListener('keydown', onArrowBtnKeydown);
}

function onEscBtnKeydown(e) {
  const isEscBtnClicked = e.code === 'Escape';

  if (isEscBtnClicked) {
    closeLightbox();
  }
}

function onArrowBtnKeydown(e) {
  const isFlipLeft = e.code === 'ArrowLeft';
  const isFlipRight = e.code === 'ArrowRight';

  if (isFlipLeft) {
    swiper.slidePrev();
  }

  if (isFlipRight) {
    swiper.slideNext();
  }
}
