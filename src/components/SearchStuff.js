import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBar = styled.input`
  min-width: 250px;
  max-width: 35%;

  margin: 30px 0px;
`;

const notFoundObj = {
  itemName: 'No Search Results',
  itemImage: 'https://static.thenounproject.com/png/4147389-200.png',
  itemDescription: 'Could not find any stuff with current search term. Sorry.',
};

export default function SearchStuff({ setItems, allItems }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = allItems.filter((item) => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
    setItems(results.length > 0 ? results : [notFoundObj]);
  }, [searchTerm]);

  return (
    <SearchBar
      className="form-control form-control-lg me-1 input"
      placeholder="Search for stuff"
      onChange={handleSearch}
      value={searchTerm}
    />
  );
}
SearchStuff.propTypes = {
  setItems: PropTypes.func.isRequired,
  allItems: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
