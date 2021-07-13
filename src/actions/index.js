import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from '../actionTypes';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const deleteBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  payload: category,
});
