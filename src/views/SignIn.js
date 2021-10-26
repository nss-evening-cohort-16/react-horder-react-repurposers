import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { signInUser } from '../api/auth';

export default function SignIn({ user }) {
  return (
    <>
      {user === null ? (
        <div className="text-center">
          <Spinner
            style={{ width: '10rem', height: '10rem' }}
            color="warning"
          />
        </div>
      ) : (
        <div className="text-center mt-5">
          <h1>Welcome to React Repurposers!</h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={signInUser}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node.isRequired,
};
