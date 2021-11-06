import React, { useState, useEffect } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { getAllCategories } from '../api/data/categoryData';

export default function ShowCategoryDropdown({ setFilteredItems, allItems }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [catArray, setCatArray] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let isMounted = true;
    getAllCategories().then((cats) => {
      if (isMounted) setCatArray(cats);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const selectCategory = (e) => {
    const { innerText } = e.target;
    setFilter(innerText);
    setFilteredItems(allItems.filter((item) => item.category === innerText));
    setDropdownOpen(false);
  };

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={() => {}}>
        <DropdownToggle color="outline-dark" onClick={toggle} caret size="lg">
          {filter || 'Select a Category'}
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
  setFilteredItems: PropTypes.func.isRequired,
  allItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
