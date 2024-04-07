import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import { getapiImges } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const refs = {
  formEl: document.querySelector('.form-search'),
  inputEl: document.querySelector('.input-text'),
  gallery: document.querySelector('.gallery'),
  loaderEl: document.querySelector('.loader'),
  loaderendEl: document.querySelector('.loaderend'),
  btnLoadMore: document.querySelector('.load-btn-submit'),
};

let query;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;

refs.formEl.addEventListener('submit', onFormSubmit);

refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(event) {
  event.preventDefault();

  query = event.target.elements.input.value.trim();
  refs.gallery.innerHTML = '';
  currentPage = 1;

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: '❌ Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  try {
    showLoader();
    const data = await getapiImges(query, currentPage);

    maxPage = Math.ceil(data.totalHits / pageSize);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          '❌ Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    renderImages(data.hits);
  } catch {
    console.log(err);
  }

  hidenLoader();

  checkBtnStatus();
  event.target.reset();
}

async function onLoadMoreClick() {
  currentPage += 1;
  showLoader();
  try {
    const data = await getapiImges(query, currentPage);

    renderImages(data.hits);
  } catch {
    console.log(err);
  }

  myScroll();
  checkBtnStatus();
  hidenLoader();
}

function showLoadMore() {
  refs.btnLoadMore.classList.remove('hidden');
}

function hidenLoadMore() {
  refs.btnLoadMore.classList.add('hidden');
}

function showLoader() {
  refs.loaderEl.classList.remove('hidden');
}

function hidenLoader() {
  refs.loaderEl.classList.add('hidden');
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    loaderElStatus();
    hidenLoadMore();
  } else {
    loaderElStatus();
    showLoadMore();
  }
}

function showLoaderend() {
  refs.loaderendEl.classList.remove('hidden');
}

function hidenLoaderend() {
  refs.loaderendEl.classList.add('hidden');
}

function loaderElStatus() {
  if (currentPage >= maxPage) {
    showLoaderend();
  } else {
    hidenLoaderend();
  }
}

function myScroll() {
  const height = refs.gallery.firstChild.getBoundingClientRect().height;
  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}