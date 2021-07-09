import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook } from '../actions';

const BooksList = ({ books, deleteBook }) => {
  const handleRemoveBook = (book) => {
    deleteBook(book);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map((book) => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))

        }
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });
const mapDispatchToProps = { deleteBook };

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
