import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { createStuff, updateStuff } from '../api/data/stuffData';
import CategoryDropdown from './CategoryDropdown';
import userId from '../api/data/userId';

const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-family: 'Heebo', sans-serif;
  font-size: 18px;
`;

const initialState = {
  itemName: '',
  itemImage: '',
  firebaseKey: '',
  itemDescription: '',
  category: '',
};

export default function Form({ stuffObj }) {
  const userInfo = userId();
  const [formInput, setFormInput] = useState({
    ...initialState,
    user: userInfo,
  });
  const history = useHistory();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (stuffObj.firebaseKey) {
      setFormInput({
        itemName: stuffObj.itemName,
        itemImage: stuffObj.itemImage,
        firebaseKey: stuffObj.firebaseKey,
        itemDescription: stuffObj.itemDescription,
        category: stuffObj.category,
        user: userInfo.user,
      });
    }
  }, [stuffObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stuffObj.firebaseKey) {
      updateStuff(formInput).then(() => {
        resetForm();
        history.push('/stuff');
      });
    } else {
      createStuff(formInput).then(() => {
        resetForm();
        history.push('/stuff');
      });
    }
  };

  const categoryRequired = (e) => {
    e.preventDefault();
    if (formInput.category) {
      handleSubmit(e);
    } else {
      setShowError(true);
    }
  };

  return (
    <EntryForm onSubmit={categoryRequired}>
      <h1>{stuffObj.firebaseKey ? 'EDIT' : 'SAVE'} STUFF</h1>
      <h5>
        {stuffObj.firebaseKey
          ? 'Update item information below!'
          : 'Add what you want to save below!'}
      </h5>
      <input
        className="form-control form-control-lg me-1 input"
        type="text"
        name="itemName"
        id="itemName"
        value={formInput.itemName}
        onChange={handleChange}
        placeholder="NAME"
        maxLength="40"
        required
      />
      <input
        className="form-control form-control-lg me-1 input"
        type="url"
        name="itemImage"
        id="itemImage"
        value={formInput.itemImage}
        onChange={handleChange}
        placeholder="IMAGE URL"
        required
      />
      <textarea
        className="form-control form-control-lg me-1 input"
        name="itemDescription"
        id="itemDescription"
        value={formInput.itemDescription}
        onChange={handleChange}
        placeholder="DESCRIPTION"
        maxLength="325"
        rows="7"
        required
      />
      <CategoryDropdown formInput={formInput} setFormInput={setFormInput} />
      {showError ? (
        <ErrorMessage className="error">MUST SELECT CATEGORY!</ErrorMessage>
      ) : (
        <></>
      )}
      <button className="btn-outline-dark btn-styling" type="submit">
        {stuffObj.firebaseKey ? 'UPDATE' : 'SUBMIT'}
      </button>
    </EntryForm>
  );
}

Form.propTypes = {
  stuffObj: PropTypes.shape({
    itemName: PropTypes.string,
    firebaseKey: PropTypes.string,
    itemImage: PropTypes.string,
    itemDescription: PropTypes.string,
    uid: PropTypes.string,
    category: PropTypes.string,
  }),
};

Form.defaultProps = { stuffObj: {} };
