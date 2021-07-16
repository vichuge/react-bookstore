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
          <p className="author-book mb-2">Suzanne Collins</p>
          <div className="row">
            <div className="col-12 col-lg-4 co-first">
              <a className="book-option" href="/">Comments</a>
            </div>
            <div className="col-12 col-lg-3 co-middle">
              <a className="book-option" href="/">Remove</a>
            </div>
            <div className="col-12 col-lg-3 co-last">
              <a className="book-option" href="/">Edit</a>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-3 col-md-2 col-lg-1 mt-2">
          <CircularProgressbar value={percentage} />
        </div>
        <div className="col-12 col-sm-3 col-md-2">
          <h2>28%</h2>
          <p className="perc-completed">Completed</p>
        </div>
        <div className="col-12 col-sm-3 col-md-4 card-last-div">
          <p className="current-chapter">Current chapter</p>
          <p>Chapter 13</p>
          <button type="button" className="btn btn-update btn-myblue mb-1">Update progress</button>
          <br />
          <button type="button" onClick={handleBookRemove} className="btn btn-danger">Remove</button>
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
