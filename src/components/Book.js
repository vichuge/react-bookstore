import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <li id={book.id}>{`${book.title}: ${book.category}`}</li>
);

Book.propTypes = {
  book: PropTypes.objectOf(Object).isRequired,
};

export default Book;
