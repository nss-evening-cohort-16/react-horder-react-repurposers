import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { createStuff, updateStuff } from '../api/data/stuffData';
import { BackgroundImage } from '../views/Home';

const FormContainer = styled.div`
  width: 60%;
  margin: auto;
  padding: 50px 0;

  h1 {
    color: #444430;
    text-align: center;
    font-size: 84px;
    font-weight: 400;
    font-family: 'Heebo', sans-serif;
    text-shadow: 2px 2px #a9a29e;
  }

  h5 {
    text-align: center;
    font-size: 35px;
    color: #a56a26;
    font-family: 'Nothing You Could Do', cursive;
  }

  input {
    font-size: 18px;
    color: #a56a26;
    font-family: 'Nothing You Could Do', cursive;
  }

  button {
    font-family: 'Heebo', sans-serif;
    background-color: #e0ccaa;
    outline-color: #a56a26;
  }
`;

const initialState = {
  itemName: '',
  itemImage: '',
  firebaseKey: '',
  itemDescription: '',
};

export default function Form({ stuffObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (stuffObj.firebaseKey) {
      setFormInput({
        itemName: stuffObj.itemName,
        itemImage: stuffObj.itemImage,
        firebaseKey: stuffObj.firebaseKey,
        itemDescription: stuffObj.itemDescription,
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

  return (
    <BackgroundImage>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h1>SAVE STUFF</h1>
          <h5>Add what you want to save below!</h5>
          <div className="mb-3 d-flex">
            <input
              className="form-control form-control-lg me-1"
              type="text"
              name="itemName"
              id="itemName"
              value={formInput.itemName}
              onChange={handleChange}
              placeholder="NAME"
              required
            />
            <input
              className="form-control form-control-lg me-1"
              type="url"
              name="itemImage"
              id="itemImage"
              value={formInput.itemImage}
              onChange={handleChange}
              placeholder="IMAGE URL"
              required
            />
            <input
              className="form-control form-control-lg me-1"
              type="text"
              name="itemDescription"
              id="itemDescription"
              value={formInput.itemDescription}
              onChange={handleChange}
              placeholder="DESCRIPTION"
              required
            />
            <button className="btn btn-outline-secondary" type="submit">
              {stuffObj.firebaseKey ? 'UPDATE' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </FormContainer>
    </BackgroundImage>
  );
}

Form.propTypes = {
  stuffObj: PropTypes.shape({
    itemName: PropTypes.string,
    firebaseKey: PropTypes.string,
    itemImage: PropTypes.string,
    itemDescription: PropTypes.string,
    uid: PropTypes.string,
  }),
};

Form.defaultProps = { stuffObj: {} };
