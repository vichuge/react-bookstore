import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import categories from './categories';

const generateId = () => {
  const myIdFloat = Math.random() * (1000 - 5) + 5;
  const myId = Math.ceil(myIdFloat);
  return myId;
};

const BookForm = ({ createBook }) => {
  const [id, setId] = useState(generateId);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handleChange = (e) => setTitle(e.target.value);
  const handleChangeSelect = (e) => setCategory(e.target.value);
  const handleChangeId = (e) => setId(e.target.value);
  const handleSubmit = (e) => {
    createBook({
      id,
      title,
      category,
    });
    setId(generateId);
    setTitle('');
    setCategory('');
    e.preventDefault();
  };
  return (
    <div className="book-form">
      <h2 className="title-form">Add new book</h2>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-12 col-sm-4 col-md-5 col-lg-5">
          <div className="form-group">
            <input type="hidden" value={id} onChange={handleChangeId} />
            <input placeholder="Add a title..." className="form-control" id="title" type="text" onChange={handleChange} value={title} required />
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-5">
          <div className="form-group">
            <select className="form-control" onChange={handleChangeSelect} required value={category}>
              <option key="default" value="">Select one...</option>
              {
                categories.map((name) => <option key={name} value={name}>{name}</option>)
              }
            </select>
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-3 col-lg-2">
          <input type="submit" value="Create new book" className="btn btn-primary btn-form" />
        </div>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createBook,
};

export default connect(null, mapDispatchToProps)(BookForm);
