import React, { useState, useEffect } from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createCategory, getAllCategories } from '../api/data/categoryData';
import userId from '../api/data/userId';

const CatForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;
`;

const initialState = {
  category: '',
  firebaseKey: '',
};

export default function CategoryDropdown({ formInput, setFormInput }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showCatForm, setShowCatForm] = useState(false);
  const userInfo = userId();
  const [catFormInput, setCatFormInput] = useState({
    ...initialState,
    user: userInfo,
  });
  const [catArray, setCatArray] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllCategories(userInfo).then((cats) => {
      if (isMounted) setCatArray(cats);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const toggleCatForm = () => setShowCatForm(!showCatForm);

  const resetCatForm = () => {
    setCatFormInput(initialState);
    setShowCatForm(false);
  };

  const selectCategory = (e) => {
    const { innerText } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      category: innerText,
    }));
    setDropdownOpen(false);
    resetCatForm();
  };

  const handleCatChange = (e) => {
    const { name, value } = e.target;
    setCatFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCatSubmit = (e) => {
    e.preventDefault();
    if (catFormInput.category.length > 0) {
      createCategory(catFormInput).then((array) => {
        setCatArray(array);
        resetCatForm();
      });
    }
  };

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={() => {}}>
        <DropdownToggle
          color="outline-dark"
          onClick={toggleDropdown}
          caret
          size="lg"
        >
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
          <DropdownItem onClick={toggleCatForm}>Create New</DropdownItem>
          {showCatForm ? (
            <CatForm>
              <input
                className="form-control form-control-lg me-1 input"
                type="text"
                name="category"
                id="category"
                value={catFormInput.category}
                onChange={handleCatChange}
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
            </CatForm>
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
