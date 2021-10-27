import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteStuff } from '../api/data/stuffData';

export default function Stuff({ stuff }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h5 className="card-title">{stuff.itemName}</h5>
          <Link to={`/stuff/${stuff.firebaseKey}`}>Single</Link>
          <br />
          <Link to={`/edit/${stuff.firebaseKey}`}>Edit</Link>
          <br />
          <button type="button" onClick={() => deleteStuff(stuff.firebaseKey)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
Stuff.propTypes = {
  stuff: PropTypes.shape({
    itemName: PropTypes.string,
    itemDescription: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
};
