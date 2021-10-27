import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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

export default function Navigation({ user }) {
  const history = useHistory();

  return (
    <NavBar>
      {user ? (
        <>
          <NavContainer>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => history.push('/home')}
            >
              Home
            </button>
            <Link className="nav-link active" to="/stuff">
              My Stuff
            </Link>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => history.push('/new')}
            >
              New
            </button>
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
        <div>React Hoarder</div>
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
