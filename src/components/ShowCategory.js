import React, { useState, useEffect } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getAllCategories } from '../api/data/categoryData';
import { getAllStuff } from '../api/data/stuffData';

export const ButtonStyling = styled.button`
  font-family: 'Heebo', sans-serif;
  background-color: #e0ccaa;
  outline-color: #a56a26;
  margin: 10px;
`;

export function ShowCategoryDropdown({
  items,
  setItems,
  allItems,
  setAllItems,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [catArray, setCatArray] = useState([]);
  const [filter, setFilter] = useState('');

  const toggle = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    let isMounted = true;
    getAllStuff().then((stuffs) => {
      if (isMounted) {
        setItems(stuffs);
        setAllItems(stuffs);
        getAllCategories().then(setCatArray);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const selectCategory = (e) => {
    const { innerText } = e.target;
    console.warn(filter);
    setFilter(innerText);
    setItems(allItems.filter((item) => item.category === innerText));
    setDropdownOpen(false);
  };

  //   const resetCategory = () => {
  //     setCatFormInput(initialState);
  //   };

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={() => {}}>
        <DropdownToggle onClick={toggle} caret size="sm">
          {items.category ? items.category : 'Select a Category'}
        </DropdownToggle>
        <DropdownMenu>
          {catArray.map((category) => (
            <DropdownItem onClick={selectCategory} key={category.firebaseKey}>
              {category.category}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
    </>
  );
}

ShowCategoryDropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  setItems: PropTypes.func.isRequired,
  allItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAllItems: PropTypes.func.isRequired,
};
