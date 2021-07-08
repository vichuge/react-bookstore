import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const BookForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Action',
    'Biography',
    'Comedy',
    'Drama',
    'Fantasy',
    'Google',
    'Horror',
  ];
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeSelect = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    createBook({
      title,
      category,
    });
    setTitle('');
    setCategory('');
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={title} required />
      <select onChange={handleChangeSelect} required value={category}>
        <option key="default" value="">Select one...</option>
        {
          categories.map((name) => <option key={name} value={name}>{name}</option>)
        }
      </select>
      <input type="submit" value="Create new book" />
    </form>
  );
};

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createBook,
};

export default connect(null, mapDispatchToProps)(BookForm);
