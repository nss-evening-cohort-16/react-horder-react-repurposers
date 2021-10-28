import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createStuff, updateStuff } from '../api/data/stuffData';

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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            className="form-control form-control-lg me-1"
            type="text"
            name="itemName"
            id="itemName"
            value={formInput.itemName}
            onChange={handleChange}
            placeholder="Add Item Name"
            required
          />
          <input
            className="form-control form-control-lg me-1"
            type="url"
            name="itemImage"
            id="itemImage"
            value={formInput.itemImage}
            onChange={handleChange}
            placeholder="ADD ITEM IMAGE URL"
            required
          />
          <input
            className="form-control form-control-lg me-1"
            type="text"
            name="itemDescription"
            id="itemDescription"
            value={formInput.itemDescription}
            onChange={handleChange}
            placeholder="ADD ITEM DESCRIPTION"
            required
          />
          <button className="btn btn-success" type="submit">
            {stuffObj.firebaseKey ? 'UPDATE' : 'SUBMIT'}
          </button>
        </div>
      </form>
    </div>
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
