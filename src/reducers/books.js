import { CREATE_BOOK, REMOVE_BOOK } from '../actionTypes';

const initialState = [
  { id: 1, title: 'The Hunger games', category: 'Action' },
  { id: 2, title: 'title 2', category: 'Biography' },
];

const books = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default books;
