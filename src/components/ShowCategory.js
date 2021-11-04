import React, { useState, useEffect } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import { getAllCategories } from '../api/data/categoryData';
import { getAllStuff } from '../api/data/stuffData';

export const ButtonStyling = styled.button`
  font-family: 'Heebo', sans-serif;
  background-color: #e0ccaa;
  outline-color: #a56a26;
  margin: 10px;
`;

export function ShowCategoryDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [catArray, setCatArray] = useState([]);
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

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
    setCatArray((prevState) => ({
      ...prevState,
      category: innerText,
    }));
    setItems(allItems.filter((item) => item.category === e.target.id));
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
