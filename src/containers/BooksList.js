import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <ul className="books-list">
    {
      books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))
    }
  </ul>
);

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
