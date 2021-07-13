import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books,
  deleteBook,
  changeFilter,
  filter,
}) => {
  const [category, setCategory] = useState(filter);
  const handleRemoveBook = (book) => {
    deleteBook(book);
  };
  const handleFilterChange = (category) => {
    changeFilter(category);
    setCategory(category);
  };
  const booksFilter = () => {
    if (category === 'All') { return books; }
    const b = [];
    books.map((book) => {
      if (book.category === category) {
        b.push(book);
      }
    });
    return b;
  };
  return (
    <>
      <CategoryFilter anyValue={handleFilterChange} />
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
            booksFilter().map((book) => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={handleRemoveBook}
              />
            ))
          }
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});
const mapDispatchToProps = { deleteBook, changeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
