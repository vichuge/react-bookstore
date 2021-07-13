import React from 'react';
import PropTypes from 'prop-types';
import categories from '../containers/categories';

const CategoryFilter = ({ handleChangeList }) => {
  const handleChange = (e) => {
    handleChangeList(e.target.value);
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
  handleChangeList: PropTypes.func.isRequired,
};

export default CategoryFilter;
