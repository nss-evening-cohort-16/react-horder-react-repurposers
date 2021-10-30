import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { signOutUser } from '../api/auth';
import img from '../images/navbar-background.png';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url(${img});
  padding: 10px;
`;

const NavContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-left: 20px;

  .linkStyling {
    padding-left: 20px;
    padding-right: 20px;
    color: #444430;
    font-family: 'Heebo', sans-serif;
    font-size: 25px;
    text-decoration: none;
  }
  a:active {
    color: #a56a26;
  }
  .btn-styling {
    font-family: 'Heebo', sans-serif;
    background-color: #e0ccaa;
    outline-color: #a56a26;
  }
`;

const NavLoggedOut = styled.div`
  font-weight: bold;
  font-family: 'Heebo', sans-serif;
  color: #444430;
  font-size: 25px;
`;

export default function Navigation({ user }) {
  return (
    <NavBar>
      {user ? (
        <>
          <NavContainer>
            <Link className="linkStyling" to="/home">
              HOME
            </Link>
            <Link className="linkStyling" to="/stuff">
              MY STUFF
            </Link>
            <Link className="linkStyling" to="/new">
              NEW
            </Link>
          </NavContainer>
          <button
            type="button"
            className="btn btn-outline-dark bt-syling"
            onClick={signOutUser}
          >
            SIGN OUT
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
