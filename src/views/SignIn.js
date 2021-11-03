import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import SignInButton from '../components/buttons/SignInButton';

export default function SignIn({ user }) {
  return (
    <>
      {user === null ? (
        <Spinner style={{ width: '5rem', height: '5rem' }} color="secondary" />
      ) : (
        <>
          <h1>Welcome to Stuff Hoarder!</h1>
          <h5>Sign in to start collecting</h5>
          <br />
          <SignInButton />
        </>
      )}
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node,
};

SignIn.defaultProps = {
  user: null,
};
