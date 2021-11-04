import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormContainer } from './Form';

export default function SearchStuff({ setItems, allItems }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = allItems.filter((item) => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
    setItems(results);
  }, [searchTerm]);

  return (
    <FormContainer>
      <input
        placeholder="Search your stuff"
        onChange={handleSearch}
        value={searchTerm}
      />
    </FormContainer>
  );
}
SearchStuff.propTypes = {
  setItems: PropTypes.func.isRequired,
  allItems: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
