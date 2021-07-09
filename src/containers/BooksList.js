import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
        books.map((book) => (
          <tr key={book.id}>
            <Book
              key={book.id}
              book={book}
            />
          </tr>
        ))

      }
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
