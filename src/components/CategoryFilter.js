import React from 'react';
import PropTypes from 'prop-types';
import categories from '../containers/categories';

const CategoryFilter = ({ handleFilterChange }) => {
  const handleChange = (e) => {
    handleFilterChange(e.target.value);
  };
  return (
    <nav className="mb-4">
      <div className="row">
        <div className="col-12 col-md-9">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-6">
              <h1 className="title-logo"><a className="a-logo" href="/">Bookstore CMS</a></h1>
            </div>
            <div className="col-12 col-md-2 col-lg-1 pt-2">
              <a className="a-navbar" href="/">Books</a>
            </div>
            <div className="col-12 col-md-3 col-lg-2">
              <select className="form-control" onChange={handleChange} aria-label="Default select example">
                <option key="default" value="All" selected>All books</option>
                {
                  categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)
                }
              </select>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 mt-1">
          <i className="fas fa-user fa-lg fa-icon float-right" />
        </div>
      </div>
    </nav>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
