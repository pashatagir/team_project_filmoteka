import genresObj from '../genres.json';
import ApiService from './fetchProdactsAPI';
const filterGenres = document.getElementById('settings');

filterGenres.addEventListener('click', onClick);

function onClick(evt) {
  console.log(evt.target.value);
}

export {};

const btnFiltersEl = document.getElementById('button-filters');
const menuFiltersEl = document.getElementById('menu-filters');
btnFiltersEl.addEventListener('click', e =>
  menuFiltersEl.classList.toggle('is-hidden')
);
