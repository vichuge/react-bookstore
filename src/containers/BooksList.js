import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  console.log(books);
  console.log(books[0].id);
  // books.map((val) => console.log(val.id));
  return (
    <ul className="books-list">
      {
        books.map((v) => <Book key={v.id} id={v.id} title={v.title} category={v.category} />)
      }
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.array).isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
