import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book, handleRemoveBook }) => {
  const handleBookRemove = () => {
    handleRemoveBook(book);
  };
  const percentage = 66;
  return (
    <div className="card">
      <div className="row card-inside">
        <div className="col-12 col-sm-3 col-md-4">
          <p className="gender-book">{book.category}</p>
          <p className="title-book">{book.title}</p>
          <p className="author-book">JRR Tolkien</p>
          <div className="row">
            <div className="col-12 col-lg-5">
              <a className="book-option" href="/">Comments</a>
            </div>
            <div className="col-12 col-lg-4">
              <a className="book-option" href="/">Remove</a>
            </div>
            <div className="col-12 col-lg-3">
              <a className="book-option" href="/">Edit</a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-3 col-md-2 mt-4">
          <CircularProgressbar value={percentage} />
        </div>
        <div className="col-12 col-sm-3 col-md-2">
          <h1>28%</h1>
          <p>Completed</p>
        </div>
        <div className="col-12 col-sm-3 col-md-4">
          <p className="current-chapter">Current chapter</p>
          <p>Chapter 13</p>
          <button type="button" onClick={handleBookRemove} className="btn btn-update">Delete</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
