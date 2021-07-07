import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const deleteBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});