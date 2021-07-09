import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const handleBookRemove = () => {
    handleRemoveBook(book);
  };
  return (
    <>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={handleBookRemove} className="btn btn-danger">Delete</button></td>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
