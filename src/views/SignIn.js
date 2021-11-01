import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';
import { signInUser } from '../api/auth';
import img from '../images/homeBackgroundImage.png';

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
            <h1>Welcome to React Repurposers!</h1>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={signInUser}
            >
              Login
            </button>
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
