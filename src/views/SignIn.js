import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';
import img from '../images/homeBackgroundImage.png';
import SignInButton from '../components/buttons/SignInButton';

const LoggedOutBackgroundImage = styled.div`
  border: 1px solid #000;
  background-image: url(${img});
  position: absolute;
  height: 100%;
  width: 100%;

  h1 {
    color: #444430;
    text-align: center;
    font-size: 84px;
    font-weight: 400;
    font-family: 'Heebo', sans-serif;
    text-shadow: 2px 2px #a9a29e;
  }

  p {
    color: #444430;
    font-family: 'Nothing You Could Do', cursive;
    font-weight: bold;
    font-size: 200%;

    margin-top: 50px;
  }

  button {
    font-family: 'Heebo', sans-serif;
    background-color: #e0ccaa;
    outline-color: #a56a26;
  }
`;
export default function SignIn({ user }) {
  return (
    <>
      <LoggedOutBackgroundImage>
        {user === null ? (
          <div className="text-center">
            <Spinner
              style={{ width: '10rem', height: '10rem' }}
              color="warning"
            />
          </div>
        ) : (
          <div className="text-center mt-5">
            <h1>Welcome to Stuff Hoarder!</h1>
            <p>Sign in to start collecting</p>
            <SignInButton />
          </div>
        )}
      </LoggedOutBackgroundImage>
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node,
};

SignIn.defaultProps = {
  user: null,
};
