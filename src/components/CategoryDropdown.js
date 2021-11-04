import React, { useState, useEffect } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { createCategory, getAllCategories } from '../api/data/categoryData';

export const ButtonStyling = styled.button`
  font-family: 'Heebo', sans-serif;
  background-color: #e0ccaa;
  outline-color: #a56a26;
  margin: 10px;
`;

const initialState = {
  category: '',
  firebaseKey: '',
};

export function CategoryDropdown({ formInput, setFormInput }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [catFormInput, setCatFormInput] = useState(initialState);
  const [catArray, setCatArray] = useState([]);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    getAllCategories().then(setCatArray);
  }, []);

  const handleClick = (e) => {
    const { innerText } = e.target;
    setShowInput(true);
    setFormInput((prevState) => ({
      ...prevState,
      category: innerText,
    }));
  };

  const selectCategory = (e) => {
    const { innerText } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      category: innerText,
    }));
    setDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setCatFormInput(initialState);
  };

  const handleCatSubmit = (e) => {
    e.preventDefault();
    createCategory(catFormInput).then((array) => {
      setCatArray(array);
      resetForm();
      setShowInput(false);
      // setDropdownOpen(false);
    });
  };

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={() => {}}>
        <DropdownToggle onClick={toggle} caret size="sm">
          {formInput.category ? formInput.category : 'Select a Category'}
        </DropdownToggle>
        <DropdownMenu>
          {catArray.map((category) => (
            <DropdownItem onClick={selectCategory} key={category.firebaseKey}>
              {category.category}
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem onClick={handleClick}>Create New</DropdownItem>
          {showInput ? (
            <>
              <input
                className="form-control form-control-lg me-1"
                type="text"
                name="category"
                id="category"
                value={catFormInput.category}
                onChange={handleChange}
                placeholder="New Category"
                required
              />
              <ButtonStyling
                onClick={handleCatSubmit}
                className="btn btn-outline-secondary"
                type="submit"
              >
                {' '}
                SUBMIT
              </ButtonStyling>
            </>
          ) : (
            ''
          )}
        </DropdownMenu>
      </ButtonDropdown>
    </>
  );
}
CategoryDropdown.propTypes = {
  formInput: PropTypes.shape().isRequired,
  setFormInput: PropTypes.func.isRequired,
};
