import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteStuff } from '../../api/data/stuffData';

export default function DeleteButton({ firebaseKey }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => {
        deleteStuff(firebaseKey).then(() => {
          history.push('/stuff');
        });
      }}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
}

DeleteButton.propTypes = {
  firebaseKey: PropTypes.string,
};

DeleteButton.defaultProps = {
  firebaseKey: '',
};
