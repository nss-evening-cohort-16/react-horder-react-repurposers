import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Stuff({ stuff }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h5 className="card-title">{stuff.itemName}</h5>
          <p className="card-text">{stuff.itemDescription}</p>
          <Link to={`/stuff/${stuff.firebaseKey}`}>Single</Link>
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
