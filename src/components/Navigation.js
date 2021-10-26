import React from 'react';
import { useHistory } from 'react-router-dom';
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
              onClick={() => history.push('/')}
            >
              Home
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => history.push('/stuff')}
            >
              Team
            </button>
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
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Navigation.defaultProps = {
  user: {},
};
