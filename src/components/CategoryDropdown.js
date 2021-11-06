import React, { useState, useEffect } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { createCategory, getAllCategories } from '../api/data/categoryData';

const initialState = {
  category: '',
  firebaseKey: '',
};

export default function CategoryDropdown({ formInput, setFormInput }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [catFormInput, setCatFormInput] = useState(initialState);
  const [catArray, setCatArray] = useState([]);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    let isMounted = true;
    getAllCategories().then((cats) => {
      if (isMounted) setCatArray(cats);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const showDropdownForm = () => {
    setShowInput(true);
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

  const resetDropdownForm = () => {
    setCatFormInput(initialState);
  };

  const handleCatSubmit = (e) => {
    e.preventDefault();
    if (catFormInput.category.length > 0) {
      createCategory(catFormInput).then((array) => {
        setCatArray(array);
        resetDropdownForm();
        setShowInput(false);
      });
    }
  };

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={() => {}}>
        <DropdownToggle color="dark" onClick={toggle} caret size="lg">
          {formInput.category ? formInput.category : 'Select a Category'}
        </DropdownToggle>
        <DropdownMenu>
          {catArray.map((category) => (
            <DropdownItem
              required
              onClick={selectCategory}
              key={category.firebaseKey}
            >
              {category.category}
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem onClick={showDropdownForm}>Create New</DropdownItem>
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
              <button
                type="button"
                onClick={handleCatSubmit}
                className="btn-outline-dark btn-styling"
              >
                SUBMIT
              </button>
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
