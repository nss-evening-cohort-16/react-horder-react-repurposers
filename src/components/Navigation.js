import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { signOutUser } from '../api/auth';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;
  border-bottom: 1px solid black;
`;

const NavContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const NavLoggedOut = styled.div`
  font-weight: bold;
`;

export default function Navigation({ user }) {
  return (
    <NavBar>
      {user ? (
        <>
          <NavContainer>
            <Link to="/home">Home</Link>
            <Link to="/stuff">My Stuff</Link>
            <Link to="/new">New</Link>
          </NavContainer>
          <button
            type="button"
            className="btn btn-danger"
            onClick={signOutUser}
          >
            Sign Out
          </button>
        </>
      ) : (
        <NavLoggedOut>React Repurposers</NavLoggedOut>
      )}
    </NavBar>
  );
}

Navigation.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.shape({
      uid: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
};

Navigation.defaultProps = {
  user: null,
};
