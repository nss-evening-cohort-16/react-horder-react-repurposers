import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DetailsButton({ firebaseKey }) {
  return (
    <Link to={`/stuff/${firebaseKey}`} className="btn btn-outline-secondary">
      <i className="fas fa-paperclip" />
    </Link>
  );
}

DetailsButton.propTypes = {
  firebaseKey: PropTypes.string,
};

DetailsButton.defaultProps = {
  firebaseKey: '',
};
