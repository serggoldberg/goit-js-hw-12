import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function articleTemplate(obj) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = obj;
  return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      lodind="lazy" 
      class="gallery-image" 
      src="${webformatURL}" 
      alt="${tags}" 
      />
  </a>
  <div class="descrip-gallery">
    <ul class="descrip-img">
      <li class="descrip-item">Likes</li>
      <li class="descrip-item">${likes}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Views</li>
      <li class="descrip-item">${views}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Comments</li>
      <li class="descrip-item">${comments}</li>
    </ul>
    <ul class="descrip-img">
      <li class="descrip-item">Downloads</li>
      <li class="descrip-item">${downloads}</li>
    </ul>
  </div>
</li>`;
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'tags',
  captionsDelay: 250,
});
function articlesTemplate(arr) {
  return arr.map(articleTemplate).join('');
}

export function renderImages(arr) {
  const markup = articlesTemplate(arr);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
  console.log(markup);
}