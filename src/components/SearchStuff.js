import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchStuff({ setSearchedItems, allItems }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = allItems.filter((item) => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchedItems(results);
  }, [searchTerm]);

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
  setSearchedItems: PropTypes.func.isRequired,
  allItems: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
