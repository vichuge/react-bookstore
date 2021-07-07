import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, category }) => (
  <li id={id}>{`${title}: ${category}`}</li>
);

Book.propTypes = {
  // book: PropTypes.objectOf(Object).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
