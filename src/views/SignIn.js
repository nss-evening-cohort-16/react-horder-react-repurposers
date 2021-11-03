import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import image from '../images/homeBackgroundImage.png';
import SignInButton from '../components/buttons/SignInButton';
import PageBackground from '../components/PageBackground';

export default function SignIn({ user }) {
  const Background = PageBackground(image);

  return (
    <>
      <Background>
        {user === null ? (
          <Spinner
            style={{ width: '5rem', height: '5rem' }}
            color="secondary"
          />
        ) : (
          <>
            <h1>Welcome to Stuff Hoarder!</h1>
            <h5>Sign in to start collecting</h5>
            <br />
            <SignInButton />
          </>
        )}
      </Background>
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node,
};

SignIn.defaultProps = {
  user: null,
};
