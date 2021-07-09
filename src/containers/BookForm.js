import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const BookForm = ({ createBook }) => {
  const myIdFloat = Math.random() * (1000 - 5) + 5;
  const myId = Math.ceil(myIdFloat);
  const [id, setId] = useState(myId);
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
  const handleChangeId = (e) => setId(e.target.value);
  const handleSubmit = (e) => {
    createBook({
      id,
      title,
      category,
    });
    const myIdFloat = Math.random() * (1000 - 5) + 5;
    const myId = Math.ceil(myIdFloat);
    setId(myId);
    setTitle('');
    setCategory('');
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="hidden" value={id} onChange={handleChangeId} />
        <label htmlFor="title">
          Title
          <input placeholder="Add a title..." className="form-control" id="title" type="text" onChange={handleChange} value={title} required />
        </label>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="category">
          Category
          <select className="form-control" onChange={handleChangeSelect} required value={category}>
            <option key="default" value="">Select one...</option>
            {
              categories.map((name) => <option key={name} value={name}>{name}</option>)
            }
          </select>
        </label>
      </div>
      <input type="submit" value="Create new book" className="btn btn-primary mt-3" />
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
