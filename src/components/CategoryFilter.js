import React from 'react';
import PropTypes from 'prop-types';
import categories from '../containers/categories';

const CategoryFilter = ({ handleFilterChange }) => {
  const handleChange = (e) => {
    handleFilterChange(e.target.value);
  };
  return (
    <select className="form-control" onChange={handleChange}>
      <option key="default" value="All">All books</option>
      {
        categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)
      }
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
