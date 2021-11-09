import React from 'react';
import PropTypes from 'prop-types';

export default function SearchStuff({ setSearchTerm, searchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      className="form-control form-control-lg me-1 input"
      placeholder="ITEM NAME"
      onChange={handleSearch}
      value={searchTerm}
    />
  );
}
SearchStuff.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};
