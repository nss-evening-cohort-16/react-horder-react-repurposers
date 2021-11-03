import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function EditButton({ firebaseKey }) {
  return (
    <Link to={`/edit/${firebaseKey}`} className="btn btn-outline-secondary">
      <i className="fas fa-edit" />
    </Link>
  );
}

EditButton.propTypes = {
  firebaseKey: PropTypes.string,
};

EditButton.defaultProps = {
  firebaseKey: '',
};
