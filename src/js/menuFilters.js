import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';
import { pagination } from './pagination';
import ApiService from './fetchProdactsAPI';

const apiService = new ApiService();
const KEY = '7cc21d4cba3da7a5d2a2ac6813f90105';
const BASE_URL = 'https://api.themoviedb.org/3';

const saveLocalStorage = (key, value) => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error('Set error: ', error.message);
  }
};

let page = localStorage.getItem('page-value');
let query = localStorage.getItem('query-value');
let genre = localStorage.getItem('genre-value');
let year = localStorage.getItem('year-value');

if (!refs.filterByGenre) {
  return;
} else {
  refs.filterByGenre.addEventListener('click', onSelectGenre);
  refs.filterByYear.addEventListener('click', onSelectYear);
  refs.resetButton.addEventListener('click', onSelectReset);
}

export const getSearchByFilters = async (
  page = '',
  query = '',
  genre = '',
  year = ''
) => {
  const filters = {
    year: year !== '' ? `&primary_release_year=${year}` : '',
    genre: genre !== '' ? `&with_genres=${genre}` : '',
    queryFetch: query !== '' ? `&query=${query}` : '',
    discover: query === '' ? '/discover' : '/search',
    week: query === '' || genre !== '' ? '' : '/week',
  };

  const { data } = await axios.get(
    `${BASE_URL}${filters.discover}/movie${filters.week}?api_key=${KEY}${filters.genre}${filters.year}&language=en-US${filters.queryFetch}&page=${page}`
  );

  return data;
};

function onSelectReset(e) {
  Loading.pulse('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
  query = '';
  genre = '';
  year = '';
  page = 1;
  localStorage.setItem('query-value', query);
  localStorage.setItem('genre-value', genre);
  localStorage.setItem('year-value', year);
  localStorage.setItem('page-value', page);
  apiService.getPopularFilms().then(data => {
    renderFilmCard(data);
    pagination.reset(data.total_results);
    Loading.remove();
  });
  saveLocalStorage('page-value', page);
}

function onSelectGenre(e) {
  if (e) {
    Loading.pulse('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
    });
    genre = e.target.value;
    page = 1;
    localStorage.setItem('page-value', page);
    localStorage.setItem('genre-value', genre);
    getSearchByFilters(page, query, genre, year).then(data => {
      renderFilmCard(data);
      pagination.reset(data.total_results);
      Loading.remove();
    });
  }
}

function onSelectYear(e) {
  Loading.pulse('Loading...', {
    backgroundColor: 'rgba(0,0,0,0.8)',
  });
  page = 1;
  localStorage.setItem('page-value', page);
  year = e.target.value;
  localStorage.setItem('year-value', year);
  getSearchByFilters(page, query, genre, year).then(data => {
    renderFilmCard(data);
    pagination.reset(data.total_results);
    Loading.remove();
  });
}

export const getMovieGenres = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${KEY}`
  );
  saveLocalStorage('genresList', data);
  return data;
};

const resetQuery = () => {
  refs.inputEl.value = '';
  localStorage.removeItem('query-value');
  apiService.query = '';
};
export {};
