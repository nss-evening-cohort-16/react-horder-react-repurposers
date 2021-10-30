import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';
import { signInUser } from '../api/auth';
import img from '../images/homeBackgroundImage.png';

const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${img});
  position: absolute;
  height: 100%;
  width: 100%;
`;
export default function SignIn({ user }) {
  return (
    <>
      <Content>
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
      </Content>
    </>
  );
}

SignIn.propTypes = {
  user: PropTypes.node,
};

SignIn.defaultProps = {
  user: null,
};
