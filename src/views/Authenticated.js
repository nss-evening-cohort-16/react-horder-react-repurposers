import React from 'react';
import PropTypes from 'prop-types';
import Routes from '../routes';

export default function Authenticated({ user }) {
  return <Routes user={user} />;
}

// NOTE: The propTypes are set agains the component and the term is camelCased
Authenticated.propTypes = {
  user: PropTypes.objectOf({
    fullName: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};
