import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </>
);

Book.propTypes = {
  book: PropTypes.objectOf(Object).isRequired,
};

export default Book;
