import { galleryItems } from './app';
// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
export const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }, index) => {
    //
    return `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${index}"
      alt="${description}"
    />
  </a>
</li>
`;
  })
  .join('');
// callbackfn: (value: { preview: string; original: string; description: string; }, index: number, array: { preview: string; original: string; description: string; }[]) => any, thisArg?: any): any[]
