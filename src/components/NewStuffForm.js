import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createStuff } from '../api/data/stuffData';

const initialState = {
  itemName: '',
  itemImage: '',
  firebaseKey: '',
  itemDescription: '',
};

export default function NewStuffForm({ stuffObj, user }) {
  const [formInput, setFormInput] = useState({ uid: user.uid });
  const history = useHistory();

  useEffect(() => {
    if (stuffObj.firebaseKey) {
      setFormInput({
        itemName: stuffObj.itemName,
        itemImage: stuffObj.itemImage,
        firebaseKey: stuffObj.firebaseKey,
        itemDescription: stuffObj.itemDescription,
        uid: user.uid,
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
    // setEditItem({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stuffObj.firebaseKey) {
      console.warn('edit stuff');
      // promise here => setStuff(stuff)
      resetForm();
      history.push('/');
    } else {
      createStuff({ ...formInput }).then((stuff) => {
        // setStuff(stuff)
        console.warn(stuff);
        resetForm();
        history.push('/');
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
            placeholder="Item Name"
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

NewStuffForm.propTypes = {
  stuffObj: PropTypes.shape({
    itemName: PropTypes.string,
    firebaseKey: PropTypes.string,
    itemImage: PropTypes.string,
    itemDescription: PropTypes.string,
    uid: PropTypes.string,
  }),
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

NewStuffForm.defaultProps = { stuffObj: {}, user: null };
