import Pagination from 'tui-pagination';
import { onMyButtonClick } from './scrolToTop';
import apiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination('pagination', options);

pagination.on('afterMove', onPaginationClick);

async function onPaginationClick(event) {
  onMyButtonClick();
  const page = event.page;
  localStorage.setItem('page-value', page);
  apiService.pageNum = page;

  if (
    !localStorage.getItem('year-value') &&
    !localStorage.getItem('genre-value') &&
    !localStorage.getItem('query-value')
  ) {
    console.log('nothing');
    const results = await apiService.getPopularFilms();
    renderFilmCard(results);
  } else if (
    !localStorage.getItem('year-value') &&
    !localStorage.getItem('genre-value') &&
    localStorage.getItem('query-value')
  ) {
    console.log('only query');
    apiService.query = localStorage.getItem('query-value');
    apiService.pageNum = page;
    const results = await apiService.getSearchFilms();
    renderFilmCard(results);
  } else {
    console.log('else');
    // const results = await getSearchByFilters(
    //   page,
    //   localStorage.getItem('query-value'),
    //   localStorage.getItem('genre-value'),
    //   localStorage.getItem('year-value')
    // );
    const result = await apiService.getRevenueFilms(true);
    renderFilmCard(result);
  }
}

export function cleanPagination() {
  refs.paginationList.innerHTML = '';
}
